import express, { Request, Response } from "express";
import cors from "cors";
import { Produto, produtos } from "./data";

//_Exercício 1_

const app = express();

app.use(express.json())

app.use(cors())

app.listen(3003, () => console.log("Servidor está funcionando! :)"))

app.get("/test", (req:Request, res:Response)=>{
    res.status(200).send({
        message:"Server is running on port 3003 :)"
    })
})

//Exercício 2 - data.ts

// Exercício 3

app.get("/produtos", (req: Request, res:Response)=>{
   try {
       res.status(200).send({mensagem: "Solicitação processada com sucesso!", produtos:produtos})
   } catch (error) {
       res.statusCode = 422
       throw new Error("Erro inesperado")
   } 
})

