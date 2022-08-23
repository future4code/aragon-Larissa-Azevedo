import { Request, Response } from "express"
import { ProductBusiness } from "../business/ProductBusiness"
import { BaseError } from "../errors/BaseError"
import { IAddProductInputDTO, IGetProductsInputDTO } from "../models/Products"

export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) {}

    public addProduct = async (req:Request, res:Response) => {
        try {
            const input: IAddProductInputDTO = {
                token: req.headers.authorization,
                id: req.body.id,
                name:req.body.name
            }

            const response = await this.productBusiness.addProduct(input)
            res.status(201).send(response)

        } catch (error:unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao adicionar produto!" })
        }
    }

    public getProducts = async (req:Request, res: Response) => {
        try {
            const input:IGetProductsInputDTO = {
                query:req.query.query as string
            } 

            const response = await this.productBusiness.getProducts(input as unknown as string)

            res.status(200).send(response)
            
        } catch (error:unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao buscar produtos!" })
        }
    }
}