import { Request, Response } from "express";
import connection from "../database/connection";

export const deleteTask = async (req:Request, res:Response) => {
    let errorCode = 400

    try {
        const taskId = Number(req.params.taskId)

        const [tasks] = await connection.raw(`
        SELECT * FROM Tasks
        WHERE id = ${taskId} `)

        if(!tasks[0]){
            errorCode = 404
            throw new Error("Error: Task inexistent in our database.");
        }
// ++ Deleção de tarefas necessita de remoção de usuários destacados para esta tarefa.
        
        await connection.raw(`
        DELETE FROM Tasks
        WHERE id = ${taskId}`)

        res.status(200).send({message:"Task successfully deleted!"})




        
    } catch (error) {
        res.status(errorCode).send({mensagem: error.message})
    }
}