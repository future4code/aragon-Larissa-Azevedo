import { Request, Response } from "express";
import { ClassroomDatabase } from "../database/ClassroomDatabase";
import { IClassroomDB } from "../models/Classroom";


export class ClassroomController {
    public async getAllClassrooms(req: Request, res: Response) {
        let errorCode = 400

        try {
            const classroomDatabase = new ClassroomDatabase()
            const result = await classroomDatabase.getAllClassrooms()

            res.status(200).send({ classrooms: result })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async createClassroom(req: Request, res: Response) {
        let errorCode = 400

        try {
            const name = req.body.name
            const module = req.body.module

            if (!name || !module) {
                errorCode = 422;
                throw new Error("Erro: Há campos em branco, por favor confira seus parâmetros");
            }

            if (module !== "0" && module !== "1" && module !== "2" && module !== "3" &&
                module !== "4" && module !== "5" && module !== "6") {
                errorCode = 422;
                throw new Error("Erro: 'module' deve ser um número em string entre 0 e 6");
            }

            const classroom: IClassroomDB = {
                id: Date.now().toString(),
                name: name,
                module: module
            }

            const classroomDatabase = new ClassroomDatabase();
            await classroomDatabase.createClassroom(classroom)

            res.status(201).send({ message: "Turma criada!", turma: classroom })


        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async getActiveClass(req: Request, res: Response) {
        let errorCode = 400

        try {
            const classroomDatabase = new ClassroomDatabase()
            const result = await classroomDatabase.getActiveClass()

            res.status(200).send({ message: "Turmas ativas:", result })

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async updateModule(req: Request, res: Response) {
        let errorCode = 400

        try {
            const id = req.params.id
            const module = req.body.module

            const classroom = new ClassroomDatabase()
            const findClassroom = await classroom.getClassroomById(id)

            if (!id || !module) {
                throw new Error("Erro: Há campos em branco, por favor confira seus parâmetros.");
            }

            if(!findClassroom){
                errorCode = 404
                throw new Error("Erro: turma não encontrada.");                
            }

            if(module === findClassroom.module){
                errorCode = 400
                throw new Error(`Erro: A turma ${findClassroom.name} já está no módulo ${findClassroom.module}!`);
            }

            if (typeof module != "string") {
                throw new Error("Erro: 'module' deve receber um tipo 'string'. Por favor, confira seus parâmetros.");
            }

            const classroomDatabase = new ClassroomDatabase()
            await classroomDatabase.updateClassModule(id, module)

            res.status(200).send({ message: `Módulo da turma ${findClassroom.id} alterado com sucesso!` })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}


