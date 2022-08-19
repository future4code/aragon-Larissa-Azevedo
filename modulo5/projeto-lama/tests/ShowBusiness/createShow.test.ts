
import { BaseError } from "../../src/errors/BaseError"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { ShowBusiness } from "../../src/business/ShowBusiness"
import { ShowDatabase } from "../../src/database/ShowDatabase"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"
import { ICreateShowInputDTO } from "../../src/models/Show"

describe("Testando ShowBusiness", () => {
    const showBusiness = new ShowBusiness (
        new ShowDatabaseMock() as unknown as ShowDatabase,
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("createShow bem sucedido", async () => {
        const input: ICreateShowInputDTO = {
            token:"token-astrodev",
            band: "Daisy Jones & The Six",
            starts_at: "2022-12-09"
            
        }

        const response = await showBusiness.createShow(input)

        expect(response.show.getId()).toEqual("id-mock")
        expect(response.show.getBand()).toEqual("Daisy Jones & The Six")
        expect(response.message).toEqual("Show criado com sucesso!")
    })

    test("deve retornar erro caso usuário não seja autenticado", async () => {
        expect.assertions(2)

        try {
            const input:ICreateShowInputDTO = {
                token: undefined,
                band:"The Killers",
                starts_at:"2022-12-08"
            }
            await showBusiness.createShow(input)

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
            const input:ICreateShowInputDTO = {
                token: "token-mock",
                band:"The Killers",
                starts_at:"2022-12-08"
            }
            await showBusiness.createShow(input)

        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Erro: Apenas usuários 'ADMIN' podem criar shows.")

            }
        }
    })

    test("deve retornar erro caso data do show seja anterior ao festival", async () => {
        expect.assertions(2)

        try {
            const input:ICreateShowInputDTO = {
                token: "token-astrodev",
                band:"McFly",
                starts_at:"2022-12-04"
            }
            await showBusiness.createShow(input)

        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: o show não pode ser criado em dia anterior ao início do festival!")

            }
        }
    })

    test("deve retornar erro caso data do show seja posterior ao festival", async () => {
        expect.assertions(2)

        try {
            const input:ICreateShowInputDTO = {
                token: "token-astrodev",
                band:"McFly",
                starts_at:"2022-12-12"
            }
            await showBusiness.createShow(input)

        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: o show não pode ser criado em dia posterior ao fim do festival!")

            }
        }
    })

    test("deve retornar erro caso data do show coincida com outro show", async () => {
        expect.assertions(2)

        try {
            const input:ICreateShowInputDTO = {
                token: "token-astrodev",
                band:"McFly",
                starts_at:"2022-12-07"
            }
            await showBusiness.createShow(input)

        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Erro: já tem show agendado para esse dia!")

            }
        }
    })

    
})
