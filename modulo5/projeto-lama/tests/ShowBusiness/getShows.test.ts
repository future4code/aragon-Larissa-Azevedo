import { ShowBusiness } from "../../src/business/ShowBusiness"
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

    test("getShows bem sucedido", async () => {

        const response = await showBusiness.getShows()

        expect(response.shows.length).toEqual(4)
        expect(response.shows[3].getId()).toEqual("2938d0ff-5b1e-4519-aace-bcf7ace62d57")
        expect(response.shows[3].getBand()).toEqual("Daisy Jones & The Six")
        expect(response.shows[3].getStartsAt()).toEqual(new Date("2022-12-22"))
    })

}) 