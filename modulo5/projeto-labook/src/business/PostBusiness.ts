import { PostDatabase } from "../database/PostDatabase"
import { ICreatePostDTO, IDeleteUserInputDTO, IGetPostsInputDTO, Post } from "../models/Post"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public createPost = async (input: ICreatePostDTO) => {
        const token = input.token
        const content = input.content

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Erro: Confira seu token.")
        }

        if(!content){
            throw new Error("Erro: Parâmetro 'content' não preenchido.");            
        }

        if(content.length < 1){
            throw new Error("Erro: Parâmetro 'content' deve ter ao menos 1 caractere.");
        }
        
        const id = this.idGenerator.generate()

        const newPost = new Post(
            id,
            content,
            payload.id,            
        )

        await this.postDatabase.createPost(newPost)

        const response = {
            message: "Post realizado com sucesso!",
            newPost
        }

        return response   
    }

    public getPosts = async (input:IGetPostsInputDTO) => {
        const token = input.token
        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Erro: Confira seu token.")
        }

        const feed = await this.postDatabase.getPosts()

        const response = {
            feed
        }

        return response                
    }

    public deletePost = async(input:IDeleteUserInputDTO) => {
        const token = input.token
        const idToDelete = input.idToDelete

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Erro: Confira seu token!")
        }

        const postsDB = await this.postDatabase.findPostById(idToDelete)

        if(payload.role === USER_ROLES.NORMAL){
            if(payload.id !== postsDB.user_id)  {
                throw new Error("Erro: Apenas usuários 'ADMIN' podem deletar posts de outros usuários. ");                
            }          
        }

        if(!postsDB){
            throw new Error("Erro: Este post não existe.");            
        }

        await this.postDatabase.deletePost(idToDelete)

        const response = {
            message: "Post deletado com sucesso!"
        }

        return response        
    }

}