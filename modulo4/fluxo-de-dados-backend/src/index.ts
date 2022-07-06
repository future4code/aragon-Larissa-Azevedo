import express, { Request, Response } from "express";
import cors from "cors";
import { Produto, produtos } from "./data";
import { request } from "http";

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

//_Exercício 4_

app.post("/produtos", (req: Request, res:Response) => {
    try {
        
    } catch (error) {
        
    }
})

//_Exercício 5_

app.put("/produtos/:id", (req: Request, res: Response)=>{
    const{id} = req.params;
    const {price} = req.body;
    

    const alteraPreco = produtos.map((produto)=>{
        if(produto.id === id) {
            produto.price = price
        }
        return produto
    })

    res.status(200).send({mensagem:"Valor alterado!", produtos:alteraPreco})
})

//_Exercício 6_

app.delete("/produtos/:id", (req:Request,res:Response)=>{
    const {id} = req.params

    const deletaProduto = produtos.findIndex((produto)=>{
        return produto.id === id;
    })

    produtos.splice(deletaProduto, 1);
    res.status(200).send({mensagem:"Produto deletado!", produtos: produtos})

})
