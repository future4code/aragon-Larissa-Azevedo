import { Request, Response } from "express";
import connection from "../database/connection";

  
export const addUserResponsibleByTask = async (req:Request, res:Response) =>{
    let errorCode = 400

    try {
        const taskId = req.params.taskId
        const users = req.body.users

        const [checkIfTaskExists] = await connection.raw(`
        SELECT * FROM Tasks
        WHERE id = ${taskId};
        `);

        if (!checkIfTaskExists[0]) {
            errorCode = 404
            throw new Error("Error: Task not found in database.");
        }

        const [checksUserId] = await connection.raw(`
        SELECT * FROM Users
        WHERE id = ${users};
        `)

        if (!checksUserId[0]) {
            throw new Error("Error: User not found database.");
        }

        const [checkUserResponsible] = await connection.raw(`
        SELECT * FROM Responsibles
        WHERE userId = ${users};
        `)

        if(!checkUserResponsible[0]){
            throw new Error("Error: User already responsible.");
        }

        await connection.raw(`
        INSERT INTO Responsibles (userId, taskId)
        VALUES
        (${users}, ${taskId});
        `)

        return res.status(200).send({message:"User is successfully responsible for this task!"})
        
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }

}