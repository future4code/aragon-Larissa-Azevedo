import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { ping } from './endpoints/ping'
import { createUser } from './endpoints/createUser'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

//Endpoint de Teste
app.get("/ping", ping)

//Endpoints Mínimos do MVP
app.post("/users", createUser)