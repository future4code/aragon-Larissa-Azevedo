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
}
