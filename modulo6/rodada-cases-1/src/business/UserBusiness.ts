import { UserDatabase } from "../database/UserDatabase"
import { ConflictError } from "../errors/ConflictError"
import { NotFoundError } from "../errors/NotFoundError"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { ILoginInputDTO, ILoginOutputDTO, ISignupInputDTO, ISignupOutputDTO, User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public signup = async (input:ISignupInputDTO) => {
        const {name, email, password } = input      

        if (typeof name !== "string" || name.length < 3) {
            throw new RequestError("Erro: Parâmetro 'name' deve ser 'string' e ter ao menos 3 caracteres.")
        }


        if (typeof password !== "string" || password.length < 6) {
            throw new RequestError("Erro: Parâmetro 'password' deve ser 'string' e ter ao menos 6 caracteres.")
        }

        if (typeof email !== "string") {
            throw new RequestError("Erro: Parâmetro 'email' deve ter do tipo 'string.'")
        }

        if (!email.includes("@") || !email.includes(".com")) {
            throw new RequestError("Erro: Parâmetro 'email' inválido.")
        }

        const ifEmailExists = await this.userDatabase.checksIfEmailExists(email)
        if (ifEmailExists) {
            throw new ConflictError("Erro: E-mail já cadastrado!");
        }

        const id = this.idGenerator.generate()
        const hashedPassword = await this.hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashedPassword,
            USER_ROLES.NORMAL
        )

        await this.userDatabase.createUser(user)

        const payload:ITokenPayload = {
            id: user.getId(),
            role:user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response:ISignupOutputDTO = {
            message:"Cadastro realizado com sucesso!",
            token
        }

        return response    

    }

    public login = async(input:ILoginInputDTO) => {
        const {email, password} = input

        if (typeof email !== "string") {
            throw new RequestError("Erro: Parâmetro 'email' deve ser do tipo 'string.'")
        }

        if (!email.includes("@") || !email.includes(".com")) {
            throw new RequestError("Erro: Parâmetro 'email' inválido.")
        }

        if (typeof password !== "string") {
            throw new RequestError("Erro: Parâmetro 'password' deve ser do tipo 'string.'")
        }

        if(password.length < 6){
            throw new RequestError("Erro: Parâmetro 'password' deve ter ao menos 6 caracteres.")
        }

        const userDB = await this.userDatabase.checksIfEmailExists(email)
        if (!userDB) {
            throw new NotFoundError("Erro: E-mail não cadastrado no sistema!");
        }

        const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )

        const ifPasswordIsCorrect = await this.hashManager.compare(password, user.getPassword())

        if(!ifPasswordIsCorrect){
            throw new UnauthorizedError("Erro: password incorreta!");            
        }

        const payload:ITokenPayload = {
            id:user.getId(),
            role:user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response:ILoginOutputDTO = {
            message:"Login realizado com sucesso!",
            token
        }

        return response           

    }



} 