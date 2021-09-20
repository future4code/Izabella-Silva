import { Request, Response } from "express";
import { FollowDataBase } from "../data/FollowDataBase";
import { RecipesDataBase } from "../data/RecipesDataBase";
import { Authenticator } from "../services/Autenticator";

const getAllFeedAsync = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const token =  req.headers.authorization

        if(!token){
            throw new Error("Obrigatório autorização")
        }

        const authenticator = new Authenticator()
        const user = authenticator.getTokenData(token)

        if(!user){
            throw new Error("Usuário não encontrado")
        }

        const getFollows = new FollowDataBase()
        const follows = await getFollows.getFollowsByUserId(user.id)

        const recipes: any = []

        await Promise.all(follows.map(async(follow: any) => {
            const recipeDataBase = new RecipesDataBase()
            recipes.push(await recipeDataBase.getFeedRecipes(follow.id_user_follow))
        }))

        res.status(200).send(recipes)

    }catch(error: any){
        res.status(error.statusCode || 400).send(error.sqlMessage || error.message)
    }
}

export default getAllFeedAsync