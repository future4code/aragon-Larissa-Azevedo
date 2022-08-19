import { PostBusiness } from "../../src/business/PostBusiness"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { IAddLikeInputDTO } from "../../src/models/Post"
import { BaseError } from "../../src/errors/BaseError"

describe("Testando PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("addLike bem sucedido", async () => {
        const input: IAddLikeInputDTO = {
            token: "token-mock",
            postId:"201"
        }

        const response = await postBusiness.addLike(input)

        expect(response.message).toEqual("Like realizado com sucesso")      
    })

    test("deve retornar erro caso token não seja informado", async () => {
        expect.assertions(2)

        try {
            const input = {
                token:undefined,
            } as unknown as IAddLikeInputDTO

            await postBusiness.addLike(input)
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
            const input: IAddLikeInputDTO = {
                token: "token-astrodev",
                postId:"205"
            }

            await postBusiness.addLike(input)
          }
         catch (error:unknown) {
             if(error instanceof BaseError){
                 expect(error.statusCode).toEqual(404)
                 expect(error.message).toEqual("Post não encontrado")
             }
            
        }
    })
    
    test("deve retornar erro caso já tenha dado like", async () => {
        expect.assertions(2)

        try {
            const input: IAddLikeInputDTO = {
                    token: "token-astrodev",
                    postId:"201"
            }

            await postBusiness.addLike(input)
          }
         catch (error:unknown) {
             if(error instanceof BaseError){
                 expect(error.statusCode).toEqual(400)
                 expect(error.message).toEqual("Já deu like")
             }
        }
    })

})