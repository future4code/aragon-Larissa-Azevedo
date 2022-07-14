import { Request, Response } from "express";
import connection from "../database/connection";


export const getTasksList = async (req:Request, res:Response) =>{
    let errorCode = 400

    try {
        const search = req.query.search as string

        if(search){
            const [taskslist] = await connection.raw(`
            SELECT * FROM Tasks
            WHERE title LIKE "%${search}%" or description LIKE "%${search}%"`)

            return res.status(200).send({tasks:taskslist})
        }

        const [list] = await connection.raw(` SELECT * FROM Tasks `)
        res.status(200).send({users: list})

        
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}