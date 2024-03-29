import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { ICreatePostDTO, IDeleteUserInputDTO, IDislikePostInputDTO, IGetPostsInputDTO, ILikePostInputDTO } from "../models/Post";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}

    public createPost = async (req:Request, res:Response) => {
        try {
            const input: ICreatePostDTO = {
                token: req.headers.authorization,
                content: req.body.content
            }

            const response = await this.postBusiness.createPost(input)
            res.status(201).send(response)

        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public getPosts = async (req: Request, res:Response) => {
        try {
            const input:IGetPostsInputDTO = {
                token: req.headers.authorization
            }

            const response = await this.postBusiness.getPosts(input)
            res.status(200).send(response)
            
        } catch (error) {
            res.status(400).send({ message: error.message })
        }

    }

    public deletePost =async (req:Request, res:Response) => {
        try {
            const input:IDeleteUserInputDTO = {
                token:req.headers.authorization,
                idToDelete: req.params.id
            }

            const response = await this.postBusiness.deletePost(input)

            res.status(200).send(response)
            
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public likePost = async (req:Request, res:Response) => {
        try {
            const input:ILikePostInputDTO = {
                token: req.headers.authorization,
                id: req.params.id
            }

            const response = await this.postBusiness.likePost(input)

            res.status(200).send(response)
            
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public dislikePost = async (req:Request, res:Response) => {
        try {
            const input:IDislikePostInputDTO = {
                token: req.headers.authorization,
                id: req.params.id
            }

            const response = await this.postBusiness.dislikePost(input)

            res.status(200).send(response)
            
        } catch (error) {
            res.status(400).send({ message: error.message })
        }

    }

}