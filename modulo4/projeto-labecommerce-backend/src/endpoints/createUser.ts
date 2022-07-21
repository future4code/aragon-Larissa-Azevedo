import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_USERS } from "../database/tableNames";
import { User } from "../models/User";

//Endpoint 1 - Cadastro de Usuário

export const createUser = async (req: Request, res:Response) =>{
    let errorCode = 400

    try {
        const email = req.body.email;
        const password = req.body.password;

        if(!email || !password){
            errorCode = 422
            throw new Error("Erro: Há campos em branco, por favor confira seus parâmetros!");            
        }

        if(typeof email !== "string" || typeof password !== "string"){
            errorCode = 422
            throw new Error("Erro: 'e-mail' e 'password' devem ser 'strings', por favor confira seus parâmetros!");            
        }

        if(password.length < 5){
            errorCode = 422
            throw new Error("Erro: 'password' deve ter no mínimo 5 caracteres.");            
        }

        if (!email.includes("@")) {
            errorCode = 422
            throw new Error("Erro: 'e-mail' inválido!");
          }

        const checksEmail = await connection(TABLE_USERS)
            .select()
            .where("email", "LIKE", `${email}`)
        
            if(checksEmail[0]){
                throw new Error("Erro: 'e-mail' já cadastrado!");                
            }
        
        const newUser: User = {
            id: Date.now().toString(),
            email:email,
            password:password
        }

        await connection(TABLE_USERS)
            .insert({
                id: newUser.id,
                email:newUser.email,
                password: newUser.password
            })

            res.status(201).send({usuário: newUser, message: "Usuário criado com sucesso!"})
        
    } catch (error) {
        res.status(errorCode).send({ mensagem: error.message})
    }

}
