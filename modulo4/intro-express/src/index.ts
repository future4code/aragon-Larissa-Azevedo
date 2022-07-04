//_Exercício 1_
import express, {Request, Response} from "express";
import cors from "cors";

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("Servidor funcionando! :)")
})
app.listen(3003, () => console.log("Servidor está funcionando! :)"))


