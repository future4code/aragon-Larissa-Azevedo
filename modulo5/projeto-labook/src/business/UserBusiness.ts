import { UserDatabase } from "../database/UserDatabase"
import { ILoginInputDTO, ISignupInputDTO, User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }

    public signup = async (input: ISignupInputDTO) => {
        const name = input.name
        const email = input.email
        const password = input.password

        if (!name || !email || !password) {
            throw new Error("Erro: Um ou mais parâmetros faltando.")
        }

        if (typeof name !== "string" || name.length < 3) {
            throw new Error("Erro: Parâmetro 'name' deve ter ao menos 3 caracteres.")
        }

        if (typeof password !== "string" || password.length < 6) {
            throw new Error("Erro: Parâmetro 'password' deve ter ao menos 6 caracteres.")
        }

        if (typeof email !== "string") {
            throw new Error("Erro: Parâmetro 'email' deve ter do tipo 'string.'")
        }

        if (!email.includes("@") || !email.includes(".com")) {
            throw new Error("Erro: Parâmetro 'email' inválido.")
        }

        const userDB = await this.userDatabase.checksIfEmailExists(email)
        if (userDB) {
            throw new Error("Erro: E-mail já cadastrado!");
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

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response = {
            message: "Cadastro realizado com sucesso!",
            token
        }

        return response

    }

    public login = async (input: ILoginInputDTO) => {
        const email = input.email
        const password = input.password

        if (!email || !password) {
            throw new Error("Erro: Um ou mais parâmetros faltando.")
        }

        if (typeof email !== "string") {
            throw new Error("Erro: Parâmetro 'email' deve ter do tipo 'string.'")
        }

        if (!email.includes("@") || !email.includes(".com")) {
            throw new Error("Erro: Parâmetro 'email' inválido.")
        }

        if (typeof password !== "string" || password.length < 6) {
            throw new Error("Erro: Parâmetro 'password' deve ter ao menos 6 caracteres.")
        }

        const userDB = await this.userDatabase.checksIfEmailExists(email)
        if (!userDB) {
            throw new Error("Erro: E-mail não cadastrado no sistema!");
        }

        const user = new User (
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )

        const isPasswordCorrect = await this.hashManager.compare(password, user.getPassword())

        if(!isPasswordCorrect){
            throw new Error("Erro: 'Password' incorreta!");            
        }

        const payload:ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response = {
            message: "Login realizado com sucesso!",
            token
        }
        
        return response
    }

}