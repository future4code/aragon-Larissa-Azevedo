import { PostBusiness } from "../../src/business/PostBusiness"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { IDeletePostInputDTO } from "../../src/models/Post"
import { BaseError } from "../../src/errors/BaseError"

describe("Testando PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("deletePosts bem sucedido", async () => {
        const input: IDeletePostInputDTO = {
            token: "token-astrodev",
            postId:"201"
        }

        const response = await postBusiness.deletePost(input)

        expect(response.message).toEqual("Post deletado com sucesso")      
    })

    test("deve retornar erro caso token não seja informado", async () => {
        expect.assertions(2)

        try {
            const input = {
                token:undefined,
            } as unknown as IDeletePostInputDTO

            await postBusiness.getPosts(input)
        } catch (error:unknown) {
            if(error instanceof BaseError){
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Não autenticado")

            }
        }

    })

    test("deve retornar erro se post não existir", async () => {
        expect.assertions(2)

        try {
            const input: IDeletePostInputDTO = {
                token: "token-astrodev",
                postId:"205"
            }

            await postBusiness.deletePost(input)
          }
         catch (error:unknown) {
             if(error instanceof BaseError){
                 expect(error.statusCode).toEqual(404)
                 expect(error.message).toEqual("Post não encontrado")
             }
            
        }
    })

    test("deve retornar erro se não for autorizado para deleção", async () => {
        expect.assertions(2)

        try {
            const input: IDeletePostInputDTO = {
                token: "token-mock",
                postId:"201"
            }

            await postBusiness.deletePost(input)
          }
         catch (error:unknown) {
             if(error instanceof BaseError){
                 expect(error.statusCode).toEqual(401)
                 expect(error.message).toEqual("Sem autorização")
             }
        }
    })

})