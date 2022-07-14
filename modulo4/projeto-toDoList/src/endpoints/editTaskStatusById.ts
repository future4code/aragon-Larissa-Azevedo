import { Request, Response } from "express";
import connection from "../database/connection";

export const editTaskStatusById = async (req:Request, res:Response) => {
    let errorCode = 400

    try {
        const status = req.body.status;
        const taskId = Number(req.params.taskId)

        const [checkIfTaskExists] = await connection.raw(`
        SELECT * FROM Tasks
        WHERE id = ${taskId}
        `)

        if (!checkIfTaskExists[0]) {
            errorCode = 404
            throw new Error("Error: Task not found in database.");
        }

        if (!taskId) {
            throw new Error("Error: Empty field. Please add a Task's Id.");
        }

        if (typeof status !== "string") {
            errorCode = 406
            throw new Error("Error: 'status' must be a string.");
        }
      
        if(status === "to_do" || status === "doing" || status === "done"){
            await connection.raw(`
            UPDATE Tasks
            SET status = '${status}'
            WHERE id = '${taskId}' `);

            res.status(202).send({ message:"Status successfully updated!"})
        } else{
            errorCode = 406
            throw new Error("Error: 'status' not found on our database. Please, check your input.");
            
        }
        
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }


}