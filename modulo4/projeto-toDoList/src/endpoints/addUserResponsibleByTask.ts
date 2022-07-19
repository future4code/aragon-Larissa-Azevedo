import { Request, Response } from "express";
import connection from "../database/connection";

  
export const addUserResponsibleByTask = async (req:Request, res:Response) =>{
    let errorCode = 400

    try {
        const taskId = Number(req.params.taskId)
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

       const [taskIsTaken] = await connection.raw(`
        SELECT * FROM Responsibles
        WHERE taskId = ${taskId}       
       `)

       if(taskIsTaken){
           errorCode = 406
           throw new Error("This task is already taken by another User.");
       }

       if(!taskIsTaken[0]){
        await connection.raw(`
        INSERT INTO Responsibles (userId, taskId)
        VALUES
        (${users}, ${taskId});
        `)
       }
    
    return res.status(200).send({message:"User is successfully responsible for this task!"})
        
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }

}