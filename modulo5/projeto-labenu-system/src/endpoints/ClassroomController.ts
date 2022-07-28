import { Request, Response } from "express";
import { ClassroomDatabase } from "../database/ClassroomDatabase";


export class ClassroomController {
    public async getAllClassrooms(req: Request, res: Response){
        let errorCode = 400

        try {
            const classroomDatabase = new ClassroomDatabase()
            const result = await classroomDatabase.getAllClassrooms()

            res.status(200).send({classrooms: result})
        } catch (error) {
            res.status(errorCode).send({message: error.message})
        }
    }
  
}
