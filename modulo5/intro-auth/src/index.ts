import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import { PingController } from './controller/PingController'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

const pingController = new PingController()

app.get("/ping", pingController.ping)
