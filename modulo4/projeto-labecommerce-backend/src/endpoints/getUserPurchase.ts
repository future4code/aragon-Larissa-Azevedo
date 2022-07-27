import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_USERS } from "../database/tableNames";

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
        name, price
        FROM Labe_Products
        JOIN Labe_Purchases
        ON Labe_Purchases.product_id = Labe_Products.id
        WHERE Labe_Purchases.user_id = ${user_id}
        `)

        return res.status(200).send({histórico: userPurchase})
        
    } catch (error) {
        res.status(errorCode).send({ mensagem: error.message })
    }
}