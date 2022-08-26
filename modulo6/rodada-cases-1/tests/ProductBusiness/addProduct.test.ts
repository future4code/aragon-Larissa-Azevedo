import { response } from "express"
import { ProductBusiness } from "../../src/business/ProductBusiness"
import { ProductDatabase } from "../../src/database/ProductDatabase"
import { IAddProductInputDTO } from "../../src/models/Products"
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"

describe("Testando ProductBusiness", ()=>{
    const productBusiness = new ProductBusiness (
     new ProductDatabaseMock() as unknown as ProductDatabase,
     new AuthenticatorMock
    )

    test("addProduct bem sucedido", async()=>{
        const input:IAddProductInputDTO ={
            token:"token-astrodev",
            id:8325,
            name:"Dress coding"
        }
        const response = await productBusiness.addProduct(input)
        
        expect(response.message).toEqual("Produto adicionado com sucesso!")
        expect(response.newProduct.getId()).toEqual(8325),
        expect(response.newProduct.getName()).toEqual("Dress coding")

    })


})