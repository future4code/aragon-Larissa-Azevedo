import { ProductBusiness } from "../../src/business/ProductBusiness";
import { ProductDatabase } from "../../src/database/ProductDatabase";
import { BaseError } from "../../src/errors/BaseError";
import { IAddProductInputDTO } from "../../src/models/Products";
import { ProductDatabaseMock } from "../mocks/ProductDatabaseMock";
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock";

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

    test("deve retornar erro caso usuário não seja autenticado", async () => {
        expect.assertions(2)
        
        try {
            const input:IAddProductInputDTO = {
                token:undefined,
                id:8325,
                name: "Dress coding"
            }

            await productBusiness.addProduct(input)
            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Erro: Usuário não autenticado.")
        }
    }
})

    test("deve retornar erro caso usuário não seja ADMIN", async () => {
        expect.assertions(2)

        try {
            const input:IAddProductInputDTO = {
                token: "token-mock",
                id:8325,
                name: "Dress coding"
            }
            await productBusiness.addProduct(input)

        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Erro: Apenas usuários 'ADMIN' podem adicionar produtos.")

            }
        }
    })

    test("deve retornar erro caso nome do produto não seja informado", async()=>{
        expect.assertions(2)

        try {
            const input:IAddProductInputDTO = {
                token: "token-astrodev",
                id:8325,
                name: undefined
            }
            await productBusiness.addProduct(input)

            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: Preencha o nome do produto.")
            }
        }
    })

    test("deve retornar erro caso id do produto não seja informada", async()=>{
        expect.assertions(2)

        try {
            const input:IAddProductInputDTO = {
                token: "token-astrodev",
                id:undefined,
                name: "dress code"
            }
            await productBusiness.addProduct(input)

            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: Preencha id do produto.")
            }
        }
    })


    test("deve retornar erro caso id do produto já seja cadastrada", async()=>{
        expect.assertions(2)

        try {
            const input:IAddProductInputDTO = {
                token: "token-astrodev",
                id:8371,
                name: "dress"
            }
            await productBusiness.addProduct(input)

            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: Id já cadastrada!")
            }
        }
    })

})

