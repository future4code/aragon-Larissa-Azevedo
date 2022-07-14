import { Request, Response } from "express";
import connection from "../database/connection";

export const getUserResponsibleByTask = async (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const taskId = req.params.taskId

        const [checkIfTaskExists] = await connection.raw(`
        SELECT * FROM Tasks
        WHERE id = ${taskId}
        `)

        if (!checkIfTaskExists[0]) {
            errorCode = 404
            throw new Error("Error: Task not found in database.");
        }

       const [ userTask ] =  await connection.raw(`
        SELECT 
        id, nickname
        FROM Users
        JOIN Responsibles
        ON Responsibles.userId = Users.id
        WHERE Responsibles.taskId = ${taskId}      
        `)

        return res.status(200).send({users: userTask})

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}