import { UserDatabase } from "../database/UserDatabase"
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

    public signup = async (input: ISignupInputDTO) => {
        const { name, email, password } = input

        if (typeof name !== "string") {
            throw new Error("Parâmetro 'name' inválido")
        }

        if (typeof email !== "string") {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (typeof password !== "string") {
            throw new Error("Parâmetro 'password' inválido")
        }

        if (name.length < 3) {
            throw new Error("Parâmetro 'name' inválido: mínimo de 3 caracteres")
        }

        if (password.length < 6) {
            throw new Error("Parâmetro 'password' inválido: mínimo de 6 caracteres")
        }

        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new Error("Parâmetro 'email' inválido")
        }

        const isEmailAlreadyExists = await this.userDatabase.findByEmail(email)
        
        if (isEmailAlreadyExists) {
            throw new Error("Email já cadastrado")
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

        const response: ISignupOutputDTO = {
            message: "Cadastro realizado com sucesso",
            token
        }

        return response
    }

    public login = async (input: ILoginInputDTO) => {
        const { email, password } = input

        if (typeof email !== "string") {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (typeof password !== "string") {
            throw new Error("Parâmetro 'password' inválido")
        }

        if (password.length < 6) {
            throw new Error("Parâmetro 'password' inválido: mínimo de 6 caracteres")
        }

        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new Error("Parâmetro 'email' inválido")
        }

        const userDB = await this.userDatabase.findByEmail(email)
        
        if (!userDB) {
            throw new Error("Email não cadastrado")
        }

        const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )

        const isPasswordCorrect = await this.hashManager.compare(
            password,
            user.getPassword()
        )

        if (!isPasswordCorrect) {
            throw new Error("Password incorreto")
        }

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response: ILoginOutputDTO = {
            message: "Login realizado com sucesso",
            token
        }

        return response
    }
}