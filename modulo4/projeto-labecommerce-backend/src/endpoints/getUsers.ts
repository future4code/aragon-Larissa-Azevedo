import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_USERS } from "../database/tableNames";


//Endpoint 2 - Busca por todos os Usuários

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const query = req.query.q
        const sort = req.query.sort || "id"
        const order = req.query.order || "asc"

        if (query) {
            const result = await connection(TABLE_USERS)
                .select()
                .where("email", "LIKE", `%${query}%`)
                .orderBy(`${sort}`, `${order}`)


            return res.status(200).send({ usuários: result })
        }

        const result = await connection(TABLE_USERS)
            .select()
            .orderBy(`${sort}`, `${order}`)

        return res.status(200).send({ usuários: result })


    } catch (error) {
        res.status(errorCode).send({ mensagem: error.message })
    }
};
