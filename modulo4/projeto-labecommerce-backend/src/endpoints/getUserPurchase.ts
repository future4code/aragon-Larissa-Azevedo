import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames";

// Endpoint 6 - Busca das compras de um usuário

export const getUserPurchase = async (req:Request, res: Response) =>{
    let errorCode = 400
    
    try {
        const user_id = req.params.user_id

        const checksIfUserExists = await connection(TABLE_USERS)
            .select()
            .where("id", "=", `${user_id}`)
        
        if(!checksIfUserExists[0]){
            errorCode = 404
            throw new Error("Erro: Usuário não encontrado");            
        }
        

        const [userPurchase] = await connection.raw(`
        SELECT
        ${TABLE_USERS}.email,
        ${TABLE_PRODUCTS}.name,
        ${TABLE_PRODUCTS}.price,
        ${TABLE_PURCHASES}.quantity,
        ${TABLE_PURCHASES}.total_price
        FROM ${TABLE_PURCHASES}
        JOIN ${TABLE_USERS}
        ON ${TABLE_PURCHASES}.user_id = ${TABLE_USERS}.id
        JOIN ${TABLE_PRODUCTS}
        ON ${TABLE_PURCHASES}.product_id = ${TABLE_PRODUCTS}.id
        WHERE ${TABLE_PURCHASES}.user_id = ${user_id}
        `)

        return res.status(200).send({histórico: userPurchase})
        
    } catch (error) {
        res.status(errorCode).send({ mensagem: error.message })
    }
}