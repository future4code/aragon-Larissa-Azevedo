import { PostBusiness } from "../../../src/business/PostBusiness"
import { PostDatabase } from "../../../src/database/PostDatabase"
import { IGetPostsInputDTO } from "../../../src/models/Post"
import { PostDatabaseMock } from "../PostDatabaseMock"
import { AuthenticatorMock } from "../services/AuthenticatorMock"
import { HashManagerMock } from "../services/HashManagerMock"
import { IdGeneratorMock } from "../services/IdGeneratorMock"

describe("Testando PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock() as unknown as PostDatabase,
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()

    )

    test("pegando lista de posts", async()=>{
        const input:IGetPostsInputDTO = {
            token:"token-mock",
        }

        const response = await postBusiness.getPosts(input)

        expect(response.posts.length).toEqual(3)
    })

})