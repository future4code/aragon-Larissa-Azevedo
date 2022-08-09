import { resourceUsage } from "process";
import { IClassroomDB } from "../models/Classroom";
import { BaseDatabase } from "./BaseDatabase";
import { StudentsDatabase } from "./StudentsDatabase";

export class ClassroomDatabase extends BaseDatabase{
    public static TABLE_CLASSROOMS = "Labe_Classrooms"

    public async getAllClassrooms(){
        const result = await BaseDatabase.connection(ClassroomDatabase.TABLE_CLASSROOMS)
        .select()
        return result
    }

    public async createClassroom(classroom: IClassroomDB){
        await BaseDatabase.connection(ClassroomDatabase.TABLE_CLASSROOMS)
        .insert({
            id: classroom.id,
            name: classroom.name,
            module: classroom.module
        })
    }

    public async getActiveClass(){
        const result = await BaseDatabase.connection(ClassroomDatabase.TABLE_CLASSROOMS)
        .select('name', 'module')
        .where("module", "!=", "0")

        return result
    }

    public async getClassroomById(id:string){
        const result = await BaseDatabase.connection(ClassroomDatabase.TABLE_CLASSROOMS)
        .select()
        .where({id:id})

        return result[0]
    }

    public async updateClassModule(id: string, newModule:string){
        await BaseDatabase.connection(ClassroomDatabase.TABLE_CLASSROOMS)
        .update({module: newModule})
        .where({id:id})
    }
    
}