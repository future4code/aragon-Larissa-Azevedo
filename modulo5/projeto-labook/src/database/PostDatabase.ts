import { IPostDB, Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

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

}