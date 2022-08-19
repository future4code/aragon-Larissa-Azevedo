import { getMaxListeners } from "process"
import { UserBusiness } from "../../src/business/UserBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { ISignupInputDTO } from "../../src/models/User"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("signup bem sucedido", async () => {
        const input: ISignupInputDTO = {
            name: "alice",
            email: "alice@gmail.com",
            password: "alice99"
        }

        const response = await userBusiness.signup(input)

        expect(response.message).toEqual("Cadastro realizado com sucesso")
        expect(response.token).toEqual("token-mock")
    })

    test("deve retornar erro caso nome seja string vazia", async () => {
        expect.assertions(2)

        try {
            const input:ISignupInputDTO = {
                name:"",
                email:"alice@gmail.com",
                password:"alice99"
            }

            await userBusiness.signup(input)

        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'name' inválido: mínimo de 3 caracteres")
            }
        }
    })

    test("deve retornar erro caso nome não seja string", async () => {
        expect.assertions(2)
        
        try {
            const input = {
                name: undefined,
                email:"alice@gmail.com",
                password:"alice99"
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)
            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'name' inválido: deve ser uma string")
            }            
        }
    })

    test("deve retornar erro caso email não seja string", async () => {
        expect.assertions(2)
        
        try {
            const input = {
                name: "Alice",
                email:undefined,
                password:"alice99"
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)
            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'email' inválido: deve ser uma string")
            }            
        }
    })

    test("deve retornar erro caso password não seja string", async () => {
        expect.assertions(2)
        
        try {
            const input = {
                name: "Alice",
                email:"alice@gmail.com",
                password:undefined
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)
            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'password' inválido: deve ser uma string")
            }            
        }
    })


    test("deve retornar erro caso nome seja menor que 3 caracteres", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: "al",
                email:"alice@gmail.com",
                password:"alice99"
            }

            await userBusiness.signup(input)

        } catch (error:unknown) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'name' inválido: mínimo de 3 caracteres")
            }
            
        }
    })

    test("deve retornar erro caso senha seja menor que 6 caracteres", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: "alice",
                email:"alice@gmail.com",
                password:"ali"
            }

            await userBusiness.signup(input)

        } catch (error:unknown) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'password' inválido: mínimo de 6 caracteres")
            }
            
        }
    })  

    test("deve retornar erro caso o email seja inválido",async () => {
        expect.assertions(2)

        try {
            const input:ISignupInputDTO = {
                name:"Astrodev",
                email:"astrodevgmail.com",
                password:"bananinha"
            }
            await userBusiness.signup(input)
            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'email' inválido")
            }            
        }
    })

    test("deve retornar erro caso email já seja cadastrado", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: "dev-astro",
                email:"astrodev@gmail.com",
                password:"docedebanana"
            }

            await userBusiness.signup(input)

        } catch (error:unknown) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toEqual(409)
                expect(error.message).toEqual("Email já cadastrado")
            }
            
        }
    })
    
})