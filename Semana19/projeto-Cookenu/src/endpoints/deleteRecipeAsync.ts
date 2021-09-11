import { Request, Response } from "express";
import { RecipesDataBase } from "../data/RecipesDataBase";
import { Authenticator } from "../services/Autenticator";
import { USER_ROLES } from "../types";

const deleteRecipeAsync = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const token = req.headers.authorization
        const recipeId = req.params.id

        if(!token){
            throw new Error("Para deletar receita deve estar online")
        }

        const authenticator = new Authenticator()
        const user = authenticator.getTokenData(token)

        if(!user){
            throw new Error("Deve ter autorização para deletar")
        }

        if(user && user.role !== USER_ROLES.ADMIN){
            const recipeDataBase = new RecipesDataBase()
            const recipe = await recipeDataBase.getRecipeByIdAndUserId(recipeId,user.id)

            if(!recipe.length){
                throw new Error("Receita Inexistente ou usuário não autorizado a deletar essa receita")
            }
        }

        const recipeDataBase = new RecipesDataBase()
        await recipeDataBase.deleteRecipe(recipeId)

        res.status(200).send("Receita deletada com sucesso")

    }catch(error: any){
        res.status(error.statusCode || 400).send(error.sqlMessage || error.message)
    }

}

export default deleteRecipeAsync