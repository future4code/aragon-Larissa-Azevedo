import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";
import { Product } from "../models/Product";

export const createNewProduct = async (req:Request, res:Response)=>{
    let errorCode = 400

    try {
        const {name, price} =req.body

        if (!name || !price) {
            errorCode = 400
            throw new Error("Erro! Por favor, cheque seus parâmetros.");
          }
      
          if (typeof name !== "string" || typeof price !== "number") {
            errorCode = 406;
            throw new Error("Erro: 'Name' ser uma string e 'Price', number.");
          }

          const newProduct: Product ={
              id: Date.now(),
              name: name,
              price: price
          }

          await connection.raw(`
          INSERT INTO ${TABLE_PRODUCTS}(id, name, price)
          VALUES ("${newProduct.id}", "${newProduct.name}", "${newProduct.price}")    
          `)
          res.status(201).send({mensagem:"Produto criado com sucesso!", produtos: newProduct})



    } catch (error) {
        res.status(errorCode).send({ mensagem: error.message})
    }

}