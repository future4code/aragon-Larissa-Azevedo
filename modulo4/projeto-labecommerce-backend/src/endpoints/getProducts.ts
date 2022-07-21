import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";


//Endpoint 2 - Busca por todos os Produtos

export const getProducts = async (req:Request, res:Response) => {
    let errorCode = 400

    try {
        const query = req.query.q
        const sort = req.query.sort || "price"
        const order = req.query.order || "asc"

        if (query) {
            const result = await connection(TABLE_PRODUCTS)
                .select()
                .where("name", "LIKE", `%${query}%`)
                .orderBy(`${sort}`, `${order}`)


            return res.status(200).send({ usuários: result })
        }

        const result = await connection(TABLE_PRODUCTS)
            .select()
            .orderBy(`${sort}`, `${order}`)

        return res.status(200).send({ produtos: result})
        
    } catch (error) {
        res.status(errorCode).send({ mensagem: error.message })
    }

}