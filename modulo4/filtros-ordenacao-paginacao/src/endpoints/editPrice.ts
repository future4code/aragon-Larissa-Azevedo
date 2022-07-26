import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";

export const editPrice = async (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const productId = req.params.productId as string
        const preco = Number(req.body.preco)

        if (!preco) {
            throw new Error("Erro: Adicione o preço novo.");
        }
    
        const [checaProduto] = await connection.raw(`
        SELECT * FROM ${TABLE_PRODUCTS}
        WHERE id = "${productId}" ;`)

        if (!checaProduto[0]) {
            throw new Error("Erro: Produto não existente.");
        }

        await connection.raw(`
        UPDATE ${TABLE_PRODUCTS}
        SET price = "${preco}" 
        WHERE id = "${productId}";
        `)

        res.status(200).send({ message: "Preco alterado com sucesso!" })


    } catch (error) {
        res.status(errorCode).send({ mensagem: error.message })
    }
} 