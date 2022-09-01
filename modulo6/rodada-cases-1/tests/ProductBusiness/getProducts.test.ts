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

    test("getProducts bem sucedido", async()=>{
       
        
        const response = await productBusiness.getProducts()
        
        expect(response.length).toEqual(5)
        
    })

})