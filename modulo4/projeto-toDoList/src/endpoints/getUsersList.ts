import { Request, Response } from "express"
import connection from "../database/connection"


export const getUsersList = async (req:Request, res:Response) =>{
    let errorCode = 400

    try {
      const search = req.query.search as string

      if(search){
          const [userlist] = await connection.raw(`
          SELECT * FROM Users
          WHERE name LIKE "%${search}%" OR nickname LIKE "%${search}%"`)

          return res.status(200).send({users:userlist})
      }

      const [list] = await connection.raw(` SELECT * FROM Users `)
      res.status(200).send({users: list})
      
    } catch (error) {

        res.status(errorCode).send({message: error.message})
      
    }
}