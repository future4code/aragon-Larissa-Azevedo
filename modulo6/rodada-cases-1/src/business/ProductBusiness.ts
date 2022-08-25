import { ProductDatabase } from "../database/ProductDatabase";
import { RequestError } from "../errors/RequestError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { IAddProductInputDTO, IGetProductsByIdInputDTO, IGetProductsByNameInputDTO, IGetProductsByTagInputDTO, IGetProductsOutputDTO, Product } from "../models/Products";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";

export class ProductBusiness{
    constructor(
        private productDatabase:ProductDatabase,
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

    public getProductSearchById = async (input:IGetProductsByIdInputDTO) => {
    const  search  = Number(input.search) //ERRO retorna NaN
    
    console.log(search)

    if(!search){
        throw new RequestError("Erro: insira id do produto para busca!");
        
    }

    if(typeof search !== "number"){
        throw new RequestError("Erro: id para busca deve ser um 'number'!")
    }

    const productsDB = await this.productDatabase.getProductSearchById(search)
    
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

    const response:IGetProductsOutputDTO = {
        products
    }
    
    return response
    
}

public getProductSearchByName =async (input:IGetProductsByNameInputDTO) => {
    const  search  = Number(input.search) 

    if(!search){
        throw new RequestError("Erro: insira nome do produto para busca!");
        
    }

    if(typeof search !== "string"){
        throw new RequestError("Erro: id para bsuca deve ser uma 'string'!")
    }

    const productsDB = await this.productDatabase.getProductSearchByName(search)
    
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

    const response:IGetProductsOutputDTO = {
        products
    }
    
    return response
    
}

public getProductSearchByTag =async (input:IGetProductsByTagInputDTO) => {
    const  search  = input.search 

    if(!search){
        throw new RequestError("Erro: insira tag do produto para busca!");

    }

    const tag = await this.productDatabase.getTagById(search)
    const tag_id = tag.map(item => item.id)

    const products = await this.productDatabase.getProductSearchByTag(tag_id[0])

    const response: IGetProductsOutputDTO = {
        products: products
    }   

    return response
}

}

