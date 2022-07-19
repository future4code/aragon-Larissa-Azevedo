import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

//_Exercício 3_ UPDATE

export const editPrice = async (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const id = req.params.id
        const price = req.body.price

        if (typeof price !== "number") {
            errorCode = 422
            throw new Error("Erro: 'price' deve ser um 'number', por favor confira seus parâmetros!");
        }

        if (price <= 0) {
            throw new Error("Erro: 'price' deve ser maior que zero.");
        }

        const perfumeExists = await connection(TABLE_PERFUMES)
            .select()
            .where("id", "=", `${id}`)

        if (!perfumeExists[0]) {
            errorCode = 404
            throw new Error("Perfume não localizado!");
        }

        await connection(TABLE_PERFUMES)
            .update({
                price: price
            })
            .where({
                id: id
            })

        res.status(200).send({ message: "Preço do Perfume alterado com sucesso!" })



    } catch (error) {
        res.status(errorCode).send({ mensagem: error.message })
    }
}