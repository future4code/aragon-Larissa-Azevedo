import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

//_Exercício 2_ READ

export const getPerfumes = async (req: Request, res: Response)=>{
    let errorCode = 400

    try {
        const query = req.query.q
        const sort = req.query.sort || "price"
        const order = req.query.order || "desc"
        const limit = Number(req.query.limit) || 10
        const page = Number(req.query.page) || 1
        const offset = limit * (page - 1)

        if(query) {
            const result = await connection(TABLE_PERFUMES)
            .select()
            .where("name", "LIKE", `%${query}%`)
            .orWhere("brand", "LIKE", `%${query}%`)
            .orderBy(`${sort}`, `${order}`)
            .limit(limit)
            .offset(offset)

            return res.status(200).send({perfumes: result})
        }

        const result = await connection(TABLE_PERFUMES)
        .select()
        .orderBy(`${sort}`, `${order}`)
        .limit(limit)
        .offset(offset)

        return res.status(200).send({perfumes: result})
        
    } catch (error) {
        res.status(errorCode).send({ mensagem: error.message})
    }

}