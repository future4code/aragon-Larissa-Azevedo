import {PostBusiness} from "../../../src/business/PostBusiness"
import { AuthenticatorMock } from "../../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../../mocks/services/IdGeneratorMock"
import { PostDatabaseMock} from "../../mocks/PostDatabaseMock"
import { PostDatabase } from "../../../src/database/PostDatabase"
import { ICreatePostInputDTO } from "../../../src/models/Post"

describe("Testando PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock() as unknown as PostDatabase,
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()

    )

    test("criando post", async()=>{
        const input:ICreatePostInputDTO = {
            token:"token-mock",
            content:"teste"
        }

        const response = await postBusiness.createPost(input)

        expect(response.message).toEqual("Post criado com sucesso")
        expect(response.post.getContent()).toEqual("teste")
    })

})