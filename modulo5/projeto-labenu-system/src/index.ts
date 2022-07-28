import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PingController } from './endpoints/PingController';
import { createClassroom } from './endpoints/createClassroom';
import { ClassroomController } from './endpoints/ClassroomController';

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

const pingController = new PingController()
const classroomController = new ClassroomController()

app.get("/ping", pingController.ping)
app.get("/classrooms", classroomController.getAllClassrooms)
app.post("/classrooms", createClassroom)