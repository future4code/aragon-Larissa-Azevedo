import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PingController } from './endpoints/PingController';
import { ClassroomController } from './endpoints/ClassroomController';
import { StudentsController } from './endpoints/StudentsController';

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

const pingController = new PingController()
const classroomController = new ClassroomController()
const studentsController = new StudentsController()

app.get("/ping", pingController.ping)
app.get("/classrooms", classroomController.getAllClassrooms)
app.get("/classrooms/active", classroomController.getActiveClass)
app.post("/classrooms", classroomController.createClassroom)
app.put("/classrooms/:id/module", classroomController.updateModule)

app.get("/students", studentsController.getAllStudents)
app.post("/students", studentsController.createStudent)
app.get("/students/searchByName", studentsController.getStudentByName)
app.put("/students/:id/classroom", studentsController.updateStudentClassroom)
