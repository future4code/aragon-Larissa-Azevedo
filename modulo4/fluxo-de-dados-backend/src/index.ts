import express, { Request, Response } from "express";
import cors from "cors";

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


