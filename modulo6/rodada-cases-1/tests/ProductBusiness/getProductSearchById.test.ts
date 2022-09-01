import { ProductBusiness } from "../../src/business/ProductBusiness";
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock";
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock";
import { ProductDatabase } from "../../src/database/ProductDatabase";
import { IGetProductsByIdInputDTO } from "../../src/models/Products";
import { BaseError } from "../../src/errors/BaseError";


describe("Testando ProductBusiness", () => {
    const productBusiness = new ProductBusiness (
     new ProductDatabaseMock() as unknown as ProductDatabase,
     new AuthenticatorMock
    )

    test("getSearchById bem sucedido", async()=>{
        const input:IGetProductsByIdInputDTO = {
            search: 8371        }
       
        
        const response = await productBusiness.getProductSearchById(input)
        
        expect(response.products[0].getId()).toEqual(8371)
        expect(response.products[0].getName()).toEqual("VESTIDO TRICOT CHEVRON")
        
    })

    test("deve retornar erro caso id do produto não seja informada", async()=>{
        expect.assertions(2)

        try {
            const input:IGetProductsByIdInputDTO = {
                search: undefined,                
            }
            await productBusiness.getProductSearchById(input)

            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: insira id do produto para busca!")
            }
        }
    })

    test("deve retornar erro caso id do produto não seja encontrada", async()=>{
        expect.assertions(2)

        try {
            const input:IGetProductsByIdInputDTO = {
                search: 2211,                
            }
            await productBusiness.getProductSearchById(input)

            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(404)
                expect(error.message).toEqual("Erro: Id não encontrada!")
            }
        }
    })



})