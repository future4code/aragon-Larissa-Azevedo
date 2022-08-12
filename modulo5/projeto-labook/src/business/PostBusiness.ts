import { PostDatabase } from "../database/PostDatabase"
import { ICreatePostDTO, IGetPostsInputDTO, Post } from "../models/Post"
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

        const posts = await this.postDatabase.getPosts()

        const response = {
            posts
        }

        return response      
          
    }



}