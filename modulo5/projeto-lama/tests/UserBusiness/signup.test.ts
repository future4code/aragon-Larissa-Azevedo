import { UserBusiness } from "../../src/business/UserBusiness"
import { UserDatabase } from "../../src/database/UserDatabase"
import { BaseError } from "../../src/errors/BaseError"
import { ISignupInputDTO } from "../../src/models/User"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock() as unknown as UserDatabase,
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("signup bem sucedido", async () => {
        const input: ISignupInputDTO = {
            "name": "Larissa",
            "email": "larissa@dev.com",
            "password": "backend"
        }

        const response = await userBusiness.signup(input)

        expect(response.message).toEqual("Cadastro realizado com sucesso!")
        expect(response.token).toEqual("token-mock")
    })

    test("deve retornar erro caso nome seja string vazia", async () => {
        expect.assertions(2)

        try {
            const input:ISignupInputDTO = {
                name:"",
                email: "larissa@dev.com",
                password: "backend"
            }

            await userBusiness.signup(input)

        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: Parâmetro 'name' deve ser 'string' e ter ao menos 3 caracteres.")
            }
        }
    })

    test("deve retornar erro caso nome não seja string", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: undefined,
                email: "larissa@dev.com",
                password: "backend"
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)

        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: Parâmetro 'name' deve ser 'string' e ter ao menos 3 caracteres.")
            }            
        }
    })

    test("deve retornar erro caso email não seja string", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: "Larissa",
                email:undefined,
                password:"alice99"
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)

        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: Parâmetro 'email' deve ter do tipo 'string.'")
            }            
        }
    })

    test("deve retornar erro caso password não seja string", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: "Larissa",
                email: "larissa@dev.com",
                password:undefined
            } as unknown as ISignupInputDTO

            await userBusiness.signup(input)

        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: Parâmetro 'password' deve ser 'string' e ter ao menos 6 caracteres.")
            }            
        }
    })


    test("deve retornar erro caso nome seja menor que 3 caracteres", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: "La",
                email: "larissa@dev.com",
                password: "backend"
            }

            await userBusiness.signup(input)

        } catch (error:unknown) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: Parâmetro 'name' deve ser 'string' e ter ao menos 3 caracteres.")
            }

        }
    })

    test("deve retornar erro caso senha seja menor que 6 caracteres", async () => {
        expect.assertions(2)

        try {
            const input = {
                name:"Larissa",
                email: "larissa@dev.com",
                password: "back"
            }

            await userBusiness.signup(input)

        } catch (error:unknown) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: Parâmetro 'password' deve ser 'string' e ter ao menos 6 caracteres.")
            }

        }
    })  

    test("deve retornar erro caso o email seja inválido",async () => {
        expect.assertions(2)

        try {
            const input:ISignupInputDTO = {
                name:"Larissa",
                email: "larissadev.com",
                password: "backend"
            }
            await userBusiness.signup(input)

        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: Parâmetro 'email' inválido.")
            }            
        }
    })

    test("deve retornar erro caso email já seja cadastrado", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: "dev-astro",
                email:"astrodev@gmail.com",
                password:"bananinha"
            }

            await userBusiness.signup(input)

        } catch (error:unknown) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toEqual(409)
                expect(error.message).toEqual("Erro: E-mail já cadastrado!")
            }

        }
    })

}) 