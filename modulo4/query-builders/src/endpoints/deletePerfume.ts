import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

//_Exercício 4_ DELETE

export const deletePerfume = async(req:Request, res: Response) => {
    let errorCode = 400

    try {
        const id = req.params.id

        const perfumeExists = await connection(TABLE_PERFUMES)
            .select()
            .where({ id })

        if (!perfumeExists[0]) {
            errorCode = 404
            throw new Error("Perfume não localizado!");
        }

        await connection(TABLE_PERFUMES)
        .delete()
        .where({id})

        res.status(200).send({message: "Perfume deletado com sucesso!"})
        
    } catch (error) {
        res.status(errorCode).send({ mensagem: error.message })
    }

}