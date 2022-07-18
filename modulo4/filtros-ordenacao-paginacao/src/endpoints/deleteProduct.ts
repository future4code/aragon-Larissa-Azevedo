
import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";

export const deleteProduct = async (req:Request, res:Response) => {
    let errorCode = 400

    try {
        const productId = req.params.productId      

        const [products] = await connection.raw(`
        SELECT * FROM ${TABLE_PRODUCTS}
        WHERE id = ${productId} `)

        if(!products[0]){
            errorCode = 404
            throw new Error("Erro: Produto inexistente.");
        }

        await connection.raw(`
        DELETE FROM ${TABLE_PRODUCTS}
        WHERE id = ${productId}`)

        res.status(200).send({message:"Produto deletado com sucesso!"})

    } catch (error) {
        res.status(errorCode).send({mensagem: error.message})
    }
} 