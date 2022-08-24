import { tags } from "../database/migrations/data";
import { ProductDatabase } from "../database/ProductDatabase";
import { RequestError } from "../errors/RequestError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { IAddProductInputDTO, IGetProductsInputDTO, Product } from "../models/Products";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class ProductBusiness{
    constructor(
        private productDatabase:ProductDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ){}

    public addProduct =async (input:IAddProductInputDTO) => {
        const {token, id, name} = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Erro: Usuário não autenticado.")
        }

        if(payload.role === USER_ROLES.NORMAL){          
            throw new UnauthorizedError("Erro: Apenas usuários 'ADMIN' podem adicionar produtos.");                         
        }

        if (!name) {
            throw new RequestError("Erro: Preencha o nome do produto.")
        }

        const productExists = await this.productDatabase.getProductById(id)

        if(productExists){
            throw new RequestError("Erro: Id já cadastrada!")
        }

       const newProduct = new Product(
           id,
           name           
       )

       await this.productDatabase.addProduct(newProduct)

       const response = {
           message:"Produto adicionado com sucesso!",
           newProduct
       }

       return response      
    }

    public getProducts = async () => {
        const productsDB = await this.productDatabase.getProducts()

        const products = productsDB.map(productDB => {
            return new Product(
                productDB.id,
                productDB.name
            )
        })

        for (let product of products){

            const tagsDB:any = await this.productDatabase.getTags(product.getId())
            const tags = tagsDB.map((tag:any) => tag.name )

            product.setTags(tags)
        }

        return products
    }

    public getProductSearch =async (input:IGetProductsInputDTO) => {
    const  search  = input.search 

    if(!search){
        throw new RequestError("Erro: insira id ou nome do produto para busca!");
        
    }

    const productsDB = await this.productDatabase.getProductSearch(search)
    
    const products = productsDB.map(productDB => {
        return new Product(
            productDB.id,
            productDB.name
        )
    })

    for (let product of products){

        const tagsDB:any = await this.productDatabase.getTags(product.getId())
        const tags = tagsDB.map((tag:any) => tag.name )

        product.setTags(tags)
    }
    
    return products
    
}

public getProductSearchByTag =async (input:IGetProductsInputDTO) => {
    const  search  = input.search as string

    console.log({business: search})

    if(!search){
        throw new RequestError("Erro: insira tag do produto para busca!");
        
    }

    const productsDB = await this.productDatabase.getProductSearchByTag(search as string)
    
    const products = productsDB.map((productDB:any) => {
        return new Product(
            productDB.id,
            productDB.name
        )
    })

    for (let product of products){

        const tagsDB:any = await this.productDatabase.getTags(product.getId())
        const tags = tagsDB.map((tag:any) => tag.name )

        product.setTags(tags)
    }
    
    return products
}
}

