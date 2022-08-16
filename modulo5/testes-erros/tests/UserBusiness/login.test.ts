import { UserBusiness } from "../../src/business/UserBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { ILoginInputDTO } from "../../src/models/User"
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

    test("login bem sucedido", async () => {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)

        expect(response.message).toEqual("Login realizado com sucesso")
        expect(response.token).toEqual("token-astrodev")
    })

    test("deve retornar erro caso email seja string vazia", async () => {
        expect.assertions(2)

        try {
            const input:ILoginInputDTO = {
                email:"",
                password:"alice99"
            }

            await userBusiness.login(input)

        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'email' inválido")
            }
        }
    })

    test("deve retornar erro caso password não seja string", async () => {
        expect.assertions(2)

        try {
            const input = {
                email:"alice@gmail.com",
                password:123
            } as unknown as ILoginInputDTO

            await userBusiness.login(input)

        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'password' inválido")
            }
        }
    })

    test("deve retornar erro caso password não menor que 6 caracteres", async () => {
        expect.assertions(2)

        try {
            const input:ILoginInputDTO = {
                email:"alice@gmail.com",
                password:"ecila"
            } 

            await userBusiness.login(input)

        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'password' inválido: mínimo de 6 caracteres")
            }
        }
    })    

    test("deve retornar erro caso o email seja inválido",async () => {
        expect.assertions(2)

        try {
            const input:ILoginInputDTO = {
                email:"astrodevgmail.com",
                password:"bananinha"
            }
            await userBusiness.login(input)
            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetro 'email' inválido")
            }            
        }
    })

    test("deve retornar erro caso email não tenha sido cadastrado", async () => {
        expect.assertions(2)

        try {
            const input:ILoginInputDTO = {
                email:"astro-dev@gmail.com",
                password:"bananinha"
            }
            await userBusiness.login(input)
            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(404)
                expect(error.message).toEqual("Email não cadastrado")

            }
        }
    })
    
    test("deve retornar erro caso a senha seja incorreta", async () => {
        expect.assertions(2)

        try {
            const input:ILoginInputDTO = {
                email:"astrodev@gmail.com",
                password:"bnaninha"
            }
            await userBusiness.login(input)
            
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Password incorreto")
            }
            
        }
    })
})