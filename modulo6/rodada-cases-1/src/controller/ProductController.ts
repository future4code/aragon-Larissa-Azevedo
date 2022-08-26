import { Request, Response } from "express"
import { ProductBusiness } from "../business/ProductBusiness"
import { BaseError } from "../errors/BaseError"
import { IAddProductInputDTO, IGetProductsByIdInputDTO, IGetProductsByNameInputDTO, IGetProductsByTagInputDTO } from "../models/Products"

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
            const response = await this.productBusiness.getProducts()

            res.status(200).send(response)
            
        } catch (error:unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao buscar produtos!" })
        }
    }

    public getProductSearchById = async (req:Request, res: Response) => {
        try {      

            const search:IGetProductsByIdInputDTO = {
                search: req.params.product_id as unknown as number
            }                         
          
            const response = await this.productBusiness.getProductSearchById(search)

            res.status(200).send(response)
            
        } catch (error:unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao buscar produtos por id!" })
        }
    }

    public getProductSearchByName = async (req:Request, res: Response) => {
        try {      

            const search:IGetProductsByNameInputDTO = {
                search: req.query.search as unknown as string
            }                         
            
            const response = await this.productBusiness.getProductSearchByName(search)

            res.status(200).send(response)
            
        } catch (error:unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao buscar produtos por nome!" })
        }
    }

    public getProductSearchByTag = async (req:Request, res: Response) => {
        try {      

            const search:IGetProductsByTagInputDTO= {
                search: req.query.search as string 
            }
                      

            const response = await this.productBusiness.getProductSearchByTag(search)

            res.status(200).send(response)

        } catch (error:unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao buscar produtos por tag!" })
            console.log(error)
        }
    }

}