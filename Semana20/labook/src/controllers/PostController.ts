import {Request, Response} from 'express'
import { PostBusiness, PostDTO } from "../business/PostBusiness";
import { POST_TYPE } from '../model/Post';

export class PostController {
    private postBusiness: PostBusiness

    constructor(){
        this.postBusiness = new PostBusiness()
    }

    async createPost(req: Request, res: Response){
        try{
            const postDTO: PostDTO = {
                image: req.body.image,
                description: req.body.description,
                type: req.body.type || "normal",
                user_id: req.body.user_id
            }

            if(!postDTO.image  || !postDTO.description || !postDTO.type || !postDTO.user_id){
                throw new Error("Todos os dados devem ser preenchidos")
            }

            if(postDTO.type !== POST_TYPE.NORMAL && postDTO.type !== POST_TYPE.EVENT){
                throw new Error("O parâmetro 'type' deve ser 'normal' ou 'event' ")
            }

            await this.postBusiness.createPost(postDTO)

            res.status(200).send("Post criado")

        }catch(error: any){
            res.status(error.statusCode || 500).send(error.message || "Unexpected Error")
        }
    }

    async getPostById(req: Request, res: Response){
        try{
            const postId = req.params.id
            const post = await this.postBusiness.getPostById(postId)

            res.status(200).send(post)

        }catch(error: any){
            res.status(error.statusCode || 500).send(error.message || "Unexpected Error")
        }
    }
}