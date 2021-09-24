import { PostDataBase } from "../../data/SQL/SqlPostDataBase";
import { Post } from "../../model/Post";
import { Authenticator } from "../../services/Autenticator";
import { IdGenerator } from "../../services/IdGeneratos";
import { PostRepository } from "./PostRepository";

export interface PostDTO{
    image: string,
    description: string,
    type: string
}

export class PostBusiness {
    private postDataBase: PostRepository

    constructor(
        postDataBase: PostRepository
    ){
        this.postDataBase = postDataBase
    }

    async createPost(postDTO: PostDTO, token: string){
        const authenticator = new Authenticator

        const user = authenticator.getTokenData(token)

        if(!user){
            throw new Error("Autenticação inválida")
        }

        const criation_date= new Date

        const idGenerator = new IdGenerator().generateId()

        const postModel: Post = {
            id: idGenerator,
            image: postDTO.image,
            description: postDTO.description,
            criation_date: criation_date,
            type: postDTO.type,
            user_id: `${user.id}`
        }

        await this.postDataBase.createPost(postModel)

        return postModel
    }

    async getPostById(id: string, token: string){
        
        const authenticator = new Authenticator

        const user = authenticator.getTokenData(token)

        if(!user){
            throw new Error("Autenticação inválida")
        }

        const post = await this.postDataBase.findPostById(id)

        if(!user){
            throw new Error("Autenticação inválida")
        }

        if(!post){
            throw new Error("Post não encontrado")
        }

        return {post: post}
    }
}