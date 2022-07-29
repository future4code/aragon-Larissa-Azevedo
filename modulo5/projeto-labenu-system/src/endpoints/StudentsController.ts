import { Request, Response } from "express";
import { StudentsDatabase } from "../database/StudentsDatabase";
import { IStudentDB } from "../models/Student";

export class StudentsController {
    public async getAllStudents(req: Request, res: Response) {
        let errorCode = 400

        try {
            const studentsDatabase = new StudentsDatabase()
            const result = await studentsDatabase.getAllStudents()

            res.status(200).send({ students: result })

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async createStudent(req: Request, res: Response) {
        let errorCode = 400

        try {
            const name = req.body.name
            const email = req.body.email
            const birthdate = req.body.birthdate
            const classroom_id = req.body.classroom_id


            if (!name || !email || !birthdate || !classroom_id) {
                errorCode = 422;
                throw new Error("Erro: Há campos em branco, por favor confira seus parâmetros");
            }

            // let data = new Date(birthdate);
            // let dataFormatada = (data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate() )) ;                 
            // console.log(dataFormatada);

            // const [day, month, year]:string = birthdate.split("/")
            // const formatedBirthdate = new Date(`${year}-${month}-${day}`)

            const student: IStudentDB = {
                id: Date.now().toString(),
                name: name,
                email: email,
                birthdate: birthdate,
                classroom_id: classroom_id
            }

            const studentsDatabase = new StudentsDatabase()
            await studentsDatabase.createStudent(student)

            res.status(201).send({ message: "Estudante cadastrado!", estudante: student })

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async getStudentByName(req: Request, res: Response) {
        let errorCode = 400

        try {
            const name = req.body.name

            if (name) {
                const studentsDatabase = new StudentsDatabase()
                const result = await studentsDatabase.getStudentByName(name)

                return res.status(200).send({ "Pessoa estudante encontrada!": result })
            }

            const studentsDatabase = new StudentsDatabase()
            const result = await studentsDatabase.getAllStudents()
            res.status(200).send({ "Pessoas estudantes": result })

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async updateStudentClassroom(req: Request, res: Response) {
        let errorCode = 400

        try {
            const id = req.params.id
            const classroom_id = req.body.classroom_id

            if (!id || !classroom_id) {
                throw new Error("Erro: Há campos em branco, por favor confira seus parâmetros.");
            }

            const studentsDatabase = new StudentsDatabase()
            await studentsDatabase.updateStudentClassroom(classroom_id, id)
            res.status(200).send({ message: "Turma do Estudante alterada com sucesso!" })

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async getStudentByClassroom(req: Request, res: Response) {
        let errorCode = 400

        try {
            const classroom_id = req.params.classroom_id

            if (!classroom_id) {
                throw new Error("Erro: Há campos em branco, por favor confira seus parâmetros.");
            }

            const studentsDatabase = new StudentsDatabase()
            const result = await studentsDatabase.getStudentByClassroom(classroom_id)

            res.status(200).send({ "Estudantes da turma": result })

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }

    }
}