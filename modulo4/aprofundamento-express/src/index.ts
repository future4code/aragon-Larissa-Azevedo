import express, {Request, Response} from "express";
import cors from "cors";

//_Exercício 1_
const app = express()
app.use(express.json())

app.listen(3003, ()=> console.log("Servidor está rodando!"))

app.get("/ping", (req:Request, res:Response )=>{
    res.send("Pong!")
})