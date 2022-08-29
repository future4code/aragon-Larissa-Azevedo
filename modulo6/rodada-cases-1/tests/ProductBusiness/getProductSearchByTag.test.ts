import { ProductBusiness } from "../../src/business/ProductBusiness";
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock";
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock";
import { ProductDatabase } from "../../src/database/ProductDatabase";
import { IGetProductsByTagInputDTO } from "../../src/models/Products";
import { BaseError } from "../../src/errors/BaseError";


describe("Testando ProductBusiness", () => {
    const productBusiness = new ProductBusiness (
     new ProductDatabaseMock() as unknown as ProductDatabase,
     new AuthenticatorMock
    )

    test("getSearchByTag bem sucedido", async()=>{
        const input:IGetProductsByTagInputDTO = {
            search: "delicado"
        }       
        
        const response = await productBusiness.getProductSearchByTag(input)

        expect(response.products?.length).toEqual(2)
        
    })

    test("deve retornar erro caso tag do produto não seja informada", async()=>{
        expect.assertions(2)

        try {
            const input:IGetProductsByTagInputDTO = {
                search: undefined,                
            }
            await productBusiness.getProductSearchByTag(input)

            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: insira tag do produto para busca!")
            }
        }
    })


})