import { ProductBusiness } from "../../src/business/ProductBusiness";
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock";
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock";
import { ProductDatabase } from "../../src/database/ProductDatabase";
import { IGetProductsByNameInputDTO } from "../../src/models/Products";
import { BaseError } from "../../src/errors/BaseError";


describe("Testando ProductBusiness", () => {
    const productBusiness = new ProductBusiness (
     new ProductDatabaseMock() as unknown as ProductDatabase,
     new AuthenticatorMock
    )

    test("getSearchByName bem sucedido", async()=>{
        const input:IGetProductsByNameInputDTO = {
            search: "tricot"
        }       
        
        const response = await productBusiness.getProductSearchByName(input)
        
        expect(response.products[0].getName()).toEqual("VESTIDO TRICOT CHEVRON")
        expect(response.products[0].getId()).toEqual(8371)
        
    })

    test("deve retornar erro caso nome do produto não seja informado", async()=>{
        expect.assertions(2)

        try {
            const input:IGetProductsByNameInputDTO = {
                search: undefined,                
            }
            await productBusiness.getProductSearchByName(input)

            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: insira nome do produto para busca!")
            }
        }
    })


})