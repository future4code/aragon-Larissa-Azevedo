import { PostBusiness } from "../../src/business/PostBusiness"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { IGetPostsInputDTO } from "../../src/models/Post"

describe("Testando PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("getPosts bem sucedido", async () => {
        const input: IGetPostsInputDTO = {
            token: "token-astrodev"
        }

        const response = await postBusiness.getPosts(input)

        expect(response.posts.length).toEqual(3)
        expect(response.posts[0].getId()).toEqual("201")
        expect(response.posts[0].getContent()).toEqual("Olá, sou novo por aqui!")
        expect(response.posts[0].getUserId()).toEqual("101")
    })
})