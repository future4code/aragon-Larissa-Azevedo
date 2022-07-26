import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";
import { Perfume } from "../models/Perfume";

//_Exercício 1_ CREATE

export const createNewPerfume = async (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const name = req.body.name;
        const brand = req.body.brand;
        const price = req.body.price;
        const ml = req.body.ml

        if(!name || !brand || !price || !ml){
            errorCode = 422
            throw new Error("Erro: Há campos em branco, por favor confira seus parâmetros!");            
        }

        if(typeof name !== "string" || typeof brand !== "string"){
            errorCode = 422
            throw new Error("Erro: 'name' e 'brand' devem ser 'strings', por favor confira seus parâmetros!");            
        }

        if(typeof price !== "number" || typeof ml !== "number"){
            errorCode = 422
            throw new Error("Erro: 'price' e 'ml' devem ser 'numbers', por favor confira seus parâmetros!");            
        }

        if(price <= 0){
            errorCode = 422
            throw new Error("Erro: 'price' deve ter um valor maior que zero.");
        }

        const newPerfume: Perfume = {
            id: Date.now().toString(),
            name: name,
            brand: brand,
            price: price,
            ml: ml
        }
        
        await connection(TABLE_PERFUMES)
            .insert({
                id: newPerfume.id,
                name: newPerfume.name,
                brand: newPerfume.brand,
                price: newPerfume.price,
                ml: newPerfume.ml
            })

            res.status(201).send({perfume: newPerfume, message: "Perfume criado com sucesso!"})

        
    } catch (error) {
        res.status(errorCode).send({ mensagem: error.message})
    }

}