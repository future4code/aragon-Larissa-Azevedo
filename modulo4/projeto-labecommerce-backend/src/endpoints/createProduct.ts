import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";
import { Product } from "../models/Product";

//Endpoint 3 - Cadastro de Produto

export const createProduct = async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const name = req.body.name;
    const price = req.body.price;

    if (!name || !price) {
      errorCode = 422;
      throw new Error(
        "Erro: Há campos em branco, por favor confira seus parâmetros!"
      );
    }

    if (typeof name !== "string" || typeof price !== "number") {
      errorCode = 422;
      throw new Error(
        "Erro: 'name' deve ser 'string' e 'price', number. Por favor confira seus parâmetros!"
      );
    }

    if (price <= 0) {
      errorCode = 422;
      throw new Error("Erro: 'price' deve ter um valor maior que zero.");
    }

    const newProduct: Product = {
      id: Date.now().toString(),
      name: name,
      price: price,
    };

    await connection(TABLE_PRODUCTS).insert({
      id: newProduct.id,
      name: newProduct.name,
      price: newProduct.price,
    });

    res
      .status(201)
      .send({
        produto: newProduct,
        message: "Produto cadastrado com sucesso!",
      });
  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message });
  }
};
