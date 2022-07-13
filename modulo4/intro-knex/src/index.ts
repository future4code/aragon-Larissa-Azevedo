import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";
import { Funcionários } from "./types";


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

//_Exercício 2_

app.post("/funcionarios", async (req: Request, res: Response) => {
  let errorCode = 400

  try {
    const { nome, email } = req.body

    if (!nome || !email) {
      errorCode = 400
      throw new Error("Erro! Por favor, cheque seus parâmetros.");
    }

    if (typeof nome !== "string" || typeof email !== "string") {
      errorCode = 406;
      throw new Error("Erro: 'Nome' e 'email' devem ser uma string.");
    }

    if (nome.length < 4) {
      errorCode = 406;
      throw new Error("Erro: nome do usuário deve ter ao menos 4 caracteres.");
    }

    if (!email.includes("@")) {
      throw new Error("Erro: E-mail inválido!");
    }

    const [ checaEmail ] = await connection.raw(`
    SELECT * FROM Funcionários
    WHERE email = "${email}" `)

    if (checaEmail[0]) {
      throw new Error("Erro: Email já cadastrado!");
    }

    const novoFuncionario: Funcionários = {
      id: Date.now(),
      nome: nome,
      email: email
    }

    await connection.raw(`
    INSERT INTO Funcionários (id, nome, email)
    VALUES ("${novoFuncionario.id}", "${novoFuncionario.nome}", "${novoFuncionario.email}")`)

    res.status(201).send({ mensagem: "Funcionário cadastrado com sucesso!", funcionários: novoFuncionario })

  } catch (error) {

    res.status(errorCode).send({ mensagem: error.message })

  }
})

//_Exercício 3_

app.put("/funcionarios/:id", async (req:Request, res:Response)=>{
  let errorCode = 400

  try {
    const id = Number(req.params.id)
    const email = req.body.email

    if(!email){
      errorCode = 400
      throw new Error("Erro: Campo vazio, por favor digite um email.");     
    }

    if (typeof email !== "string") {
      errorCode = 406;
      throw new Error("Erro: 'Email' deve ser uma string.");
    }

    if (!email.includes("@")) {
      throw new Error("Erro: E-mail inválido!");
    }

    const [ checaEmail ] = await connection.raw(`
    SELECT * FROM Funcionários
    WHERE email = "${email}" `)

    if (checaEmail[0]) {
      throw new Error("Erro: E-mail já cadastrado!");
    }
  
    await connection.raw(`
    UPDATE Funcionários
    SET email = "${email}"
    WHERE id = ${id}; `)

    res.status(200).send({mensagem: "E-mail atualizado com sucesso!"})

  } catch (error) {
    res.status(errorCode).send({mensagem: error.message})
  }

})

//_Exercício 4_