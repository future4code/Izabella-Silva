import { PostRepository } from "../../business/post/PostRepository";
import { Post } from "../../model/Post";
import { BaseDataBase } from "./BaseDataBase";

export class PostDataBase extends BaseDataBase implements PostRepository{
    private TABLE_NAME: string = "labook_post"

    async createPost(post: Post){
        await BaseDataBase.connection(this.TABLE_NAME)
        .insert(post)
    }

    async findPostById(id: string){
        const post = await BaseDataBase.connection(this.TABLE_NAME)
        .select().where("id", "=", `${id}`)

        return post[0]
    }
}