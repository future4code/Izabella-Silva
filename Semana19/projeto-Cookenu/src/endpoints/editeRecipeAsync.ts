import { Request, Response } from "express";
import { RecipesDataBase } from "../data/RecipesDataBase";
import { Authenticator } from "../services/Autenticator";
import { USER_ROLES } from "../types";

const editeRecipeAsync = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const token = req.headers.authorization
        const {title, description} =  req.body
        const recipeId = req.params.id

        if(!token){
            throw new Error("Obrigatório token")
        }

        if(!title || !description){
            throw new Error("Os campos 'title' e 'description' são obrigatórios")
        }

        const authenticator = new Authenticator()
        const user = await authenticator.getTokenData(token)

        if(!user && user.role !== USER_ROLES.NORMAL){
            throw new Error("Usuário não autorizado")
        }

        const recipeDataBase = new RecipesDataBase()
        const recipe = await recipeDataBase.getRecipeByIdAndUserId(recipeId, user.id)

        if(!recipe.length){
            throw new Error("Receita não pertence ao usuário ou não existe")
        }

        new RecipesDataBase().editRecipe(recipeId, title, description)

        res.status(200).send("Receita editada com sucesso")
    }catch(error: any){
        res.status(error.statusCode || 400).send(error.sqlMessage || error.message)
    }
}

export default editeRecipeAsync