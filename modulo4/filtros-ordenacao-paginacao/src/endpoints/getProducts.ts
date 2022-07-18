//_Exercícios 1_
import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";

export const getProducts = async (req:Request, res:Response) =>{
    let errorCode = 400

    try {
        const query = req.query.q
        const sort = req.query.sort || "price"
        const order = req.query.order || "asc"

        if(query){
            const [result] = await connection.raw(`
            SELECT * FROM ${TABLE_PRODUCTS}
            WHERE name LIKE "%${query}%"
            ORDER BY ${sort} ${order};`)

            return res.status(200).send({products: result})
        }


        const [ result ] = await connection.raw(`
        SELECT * FROM ${TABLE_PRODUCTS}
        ORDER BY ${sort} ${order} ;`)

        return res.status(200).send({products: result})


    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }

}


