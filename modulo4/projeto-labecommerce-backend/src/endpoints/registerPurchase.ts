import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames";
import { Purchase } from "../models/Purchase";

// Endpoint 5 - Registro de compra de produto

export const registerPurchase = async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const user_id = req.body.user_id;
    const product_id = req.body.product_id;
    const quantity = req.body.quantity;

    if (!user_id || !product_id) {
      errorCode = 422;
      throw new Error(
        "Erro: Há campos em branco, por favor confira seus parâmetros!"
      );
    }

    if (typeof user_id !== "string" || typeof product_id !== "string") {
      errorCode = 422;
      throw new Error(
        "Erro: 'user_id' e 'product_id' devem ser 'string'. Por favor confira seus parâmetros!"
      );
    }

    if (typeof quantity !== "number" || quantity <= 0) {
      errorCode = 422;
      throw new Error(
        "Erro: 'quantity' deve ser 'number' e maior que zero. Por favor confira seus parâmetros!"
      );
    }

    const checksUser = await connection(TABLE_USERS)
      .select()
      .where("id", "=", `${user_id}`);

    if (!checksUser[0]) {
      throw new Error("Erro: 'user_id' não encontrado!");
    }

    const checksProduct = await connection(TABLE_PRODUCTS)
      .select()
      .where("id", "=", `${product_id}`);

    if (!checksProduct[0]) {
      throw new Error("Erro: 'product_id' não encontrado!");
    }

    const total_price = checksProduct[0].price * quantity;

    const setNewId = await connection(TABLE_PRODUCTS)
    .select();

    const lastItem = setNewId[setNewId.length - 1];
    const lastItemId = Number(lastItem.id);

    const newPurchase: Purchase = {
      id: (lastItemId + 1).toString(),
      user_id: user_id,
      product_id: product_id,
      quantity: quantity,
      total_price: total_price,
    };

    await connection(TABLE_PURCHASES).insert({
      id: newPurchase.id,
      user_id: newPurchase.user_id,
      product_id: newPurchase.product_id,
      quantity: newPurchase.quantity,
      total_price: newPurchase.total_price,
    });

    res
      .status(201)
      .send({ compra: newPurchase, message: "Compra registrada com sucesso!" });
  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message });
  }
};
