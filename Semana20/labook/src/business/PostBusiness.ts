import { PostDataBase } from "../data/PostDataBase";
import { Post } from "../model/Post";
import { IdGenerator } from "../services/IdGeneratos";

export interface PostDTO{
    image: string,
    description: string,
    type: string,
    user_id: string
}

export class PostBusiness {
    private postDataBase: PostDataBase

    constructor(){
        this.postDataBase = new PostDataBase()
    }

    async createPost(postDTO: PostDTO){

        const criation_date= new Date

        const idGenerator = new IdGenerator().generateId()

        const postModel: Post = {
            id: idGenerator,
            image: postDTO.image,
            description: postDTO.description,
            criation_date: criation_date,
            type: postDTO.type,
            user_id: postDTO.user_id
        }

        await this.postDataBase.createPost(postModel)

        return postModel
    }

    async getPostById(id: string){
        const post = await this.postDataBase.findPostById(id)

        if(!post){
            throw new Error("Post não encontrado")
        }

        return {post: post}
    }
}