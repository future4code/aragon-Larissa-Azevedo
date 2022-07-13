import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";


const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

//_Exercício 1_

app.get("/funcionarios", async (req: Request, res: Response)=>{
  let errorCode = 400

  try {
    const busca = req.query.busca as string

    if(busca){
      const [ nome ] = await connection.raw(`
      SELECT * FROM Funcionários
      WHERE LOWER(nome) LIKE "%${busca.toLowerCase}%"`)

      return res.status(200).send({funcionários: nome})
    }

    const [resultado] = await connection.raw(`SELECT * FROM Funcionários`)
    res.status(200).send({funcionários: resultado})

  } catch (error) {
    res.status(errorCode).send({mensagem: error.message})
    
  }
})