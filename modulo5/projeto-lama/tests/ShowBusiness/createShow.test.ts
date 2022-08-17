
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
            starts_at: "2022-12-12"
            
        }

        const response = await showBusiness.createShow(input)

        expect(response.show.getId()).toEqual("id-mock")
        expect(response.show.getBand()).toEqual("Daisy Jones & The Six")
        expect(response.message).toEqual("Show criado com sucesso!")
    })
})
