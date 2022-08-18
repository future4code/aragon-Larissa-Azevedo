import { ShowBusiness } from "../../src/business/ShowBusiness"
import { BaseError } from "../../src/errors/BaseError"
import { IRemoveReservationInputDTO, ITicketReservationInputDTO } from "../../src/models/Show"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"

describe("Testing ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("removeReservation bem sucedido", async () => {

        const input:IRemoveReservationInputDTO = {
            token:"token-astrodev",
            show_id:"201"       
        
        }

        const response = await showBusiness.removeReservation(input)

        expect(response.message).toEqual("Compra de Ingresso deletada com sucesso!")
  
    })

    test("deve retornar erro caso usuário não seja autenticado", async () => {
        expect.assertions(2)

        try {
            const input:IRemoveReservationInputDTO = {
                token: undefined,
                show_id:"201"
            }
            await showBusiness.removeReservation(input)

        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Erro: Usuário não autenticado.")

            }
        }
    })

    test("deve retornar erro caso show não seja encontrado", async () => {
        expect.assertions(2)

        try {
            const input:IRemoveReservationInputDTO = {
                token: "token-mock",
                show_id:"205"
            }
            await showBusiness.removeReservation(input)

        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(404)
                expect(error.message).toEqual("Erro: Show não encontrado!")

            }
        }
    })
    
    test("deve retornar erro caso usuário não seja ADMIN", async () => {
        expect.assertions(2)

        try {
            const input:ITicketReservationInputDTO = {
                token: "token-mock",
                show_id:"201"
            }
            await showBusiness.removeReservation(input)

        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Erro: Apenas usuários 'ADMIN' podem deletar qualquer compra.")

            }
        }
    })




}) 