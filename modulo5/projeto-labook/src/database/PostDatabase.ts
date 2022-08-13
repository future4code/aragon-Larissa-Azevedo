import { IGetPostsInputDTO, ILikeDB, IPostDB, Post } from "../models/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public createPost = async (input: Post)=>{
        const postDB: IPostDB = {
            id: input.getId(),
            content: input.getContent(),
            user_id: input.getUserId()
        }

        await BaseDatabase.connection(PostDatabase.TABLE_POSTS).insert(postDB)
    }

    public getPosts = async () => {
        const postsDB:IPostDB[] = await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
        .select()

        return postsDB
    }

    public deletePost = async (id:string) => {
        await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
        .delete()
        .where("post_id", "=", `${id}`)

        await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
        .delete()
        .where({id})       
    }

    public findPostById = async (id:string) => {
        const postDB:IPostDB[] = await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
        .select()
        .where({id})

        return postDB[0]
    }

    public likePost = async (input:ILikeDB) => {
        const like: ILikeDB = {
            id: input.id,
            post_id:input.post_id,
            user_id:input.user_id
        }
        await BaseDatabase.connection(PostDatabase.TABLE_LIKES).insert(like)
    }

    public postAlreadyLikedByUser = async (id:string, userId:string) => {
        const likeDB:ILikeDB[] = await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
        .select()
        .where("user_id", "=", `${userId}`)
        .andWhere("post_id", "=", `${id}`)

        return likeDB[0]
    }

    public getLikes = async (id:string) => {
        const likes = await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
        .select()
        .count("id")
        .where({post_id: id})

        return likes[0]["count(`id`)"]
    }

    public dislikePost = async (postId: string, userId:string) => {
        await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
        .delete()
        .where("post_id", "=", `${postId}`)
        .andWhere("user_id", "=", `${userId}`)

    }
}