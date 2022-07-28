import { Request, Response } from "express";
import { ClassroomDatabase } from "../database/ClassroomDatabase";
import { IClassroomDB } from "../models/Classroom";


export const createClassroom = async (req:Request, res: Response) =>{
    let errorCode = 400

    try {
        const name = req.body.name
        const module = req.body.module

        if(!name || !module){
            errorCode = 422;
            throw new Error("Erro: Há campos em branco, por favor confira seus parâmetros");  
        }

        if(module !== 0 && module !== 1 && module !== 2 && module !== 3 &&
        module !== 4 && module !== 5 && module !== 6){
            errorCode = 422;
            throw new Error("Erro: 'module' deve ser um 'number' entre 0 e 6");            
        }

          const classroom: IClassroomDB = {
              id: Date.now().toString(),
              name: name,
              module: module
          }

          const classroomDatabase = new ClassroomDatabase();
          await classroomDatabase.createClassroom(classroom)

          res.status(201).send({message: "Turma criada!", turma: classroom})

        
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}