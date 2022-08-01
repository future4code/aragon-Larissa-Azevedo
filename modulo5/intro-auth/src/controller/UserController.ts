import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import { User } from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

//_Exercício 1_
export class UserController {
    public signup = async(req:Request, res:Response) => {
        let errorCode = 400
        try {
            const nickname = req.body.nickname
            const email =  req.body.email
            const password = req.body.password

            if(!nickname || !email || !password){
                errorCode = 401
                throw new Error("Erro: Há campos em branco, por favor confira seus parâmetros.");                
            }

            const idGenerator = new IdGenerator()
            const id = idGenerator.generate()

            const user = new User(
                id,
                nickname,
                email,
                password
            )

            const userDatabase = new UserDatabase()
            await userDatabase.createUser(user)

            const payload: ITokenPayload = {
                id: user.getId()
            }

            const authenticator = new Authenticator
            const token = authenticator.generateToken(payload)

            res.status(201).send({message:"Usuário cadastrado com sucesso!", token})
            
        } catch (error) {
            if(typeof error.message === "string" && error.message.includes("Duplicate entry")){
                return res.status(errorCode).send("E-mail já cadastrado!")
            }
            res.status(errorCode).send({ message: error.message})
    }
}
//_Exercício 2_

public login = async(req:Request, res:Response) => {
    let errorCode = 400
    try {
        const email = req.body.email
        const password = req.body.password

        if(!email || !password){
            errorCode = 401
            throw new Error("Erro: Há campos em branco, por favor confira seus parâmetros.");                
        }

        const userDatabase = new UserDatabase()
        const userDB = await userDatabase.findByEmail(email)

        if(!userDB){
            errorCode = 401
            throw new Error("Erro: e-mail não cadastrado");            
        }

        const user = new User(
            userDB.id,
            userDB.nickname,
            userDB.email,
            userDB.password
        )

        if(!user.getPassword() ! == password){
            errorCode = 406
            throw new Error("Senha não confere com os registros.");            
        }

        const payload: ITokenPayload = {
            id:user.getId()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        res.status(201).send({message:"Login realizado com sucesso!", token})
        
    } catch (error) {
        res.status(errorCode).send({ message: error.message})
    }
}

//_Exercício 3_

public getAllUsers = async(req:Request, res:Response) => {
    let errorCode = 400
    try {
        const token = req.headers.authorization

        const authenticator = new Authenticator()
        const payload = authenticator.getTokenPayload(token)

        if(!payload){
            errorCode = 401
            throw new Error("Erro: confira seu token!");
        }

        const userDatabase = new UserDatabase()
        const usersDB = await userDatabase.getAllUsers()

        const users = usersDB.map((user)=>{
            return new User(
                user.id,
                user.nickname,
                user.email,
                user.password
            )
        })

        res.status(200).send({users})
        
    } catch (error) {
        res.status(errorCode).send({ message: error.message})
    }

}

//_Exercício 4_

//_Exercício 5_

public deleteUser = async (req:Request, res:Response) => {
    let errorCode = 400

    try {
        const userId = req.params.userId

        if(!userId){
            errorCode = 401
            throw new Error("Erro: Há campos em branco, por favor confira seus parâmetros.");                
        }

        const findUserByIdDatabase = new UserDatabase()
        const userById = await findUserByIdDatabase.findById(userId)

        if(!userById){
            errorCode = 404
            throw new Error("Erro: Usuário não encontrado");            
        }

        const userDatabase = new UserDatabase()
        await userDatabase.deleteUser(userId)
        
        res.status(200).send({message:"Usuário deletado com sucesso!"})
    } catch (error) {
        res.status(errorCode).send({ message: error.message})
    }

}

}
