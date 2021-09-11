import { Request, Response } from "express";
import { RecipesDataBase } from "../data/RecipesDataBase";
import { Authenticator } from "../services/Autenticator";

const getRecipeAsync = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const token = req.headers.authorization
        const id = req.params.id

        if(!token){
            throw new Error("Obrigatório autorização")
        }

        const authenticator = new Authenticator()
        const user = authenticator.getTokenData(token)

        if(!user){
            throw new Error("Usuário não autoizado ou não logado")
        }

        const recipesDataBase = new RecipesDataBase()
        const recipe = await recipesDataBase.getRecipe(id)

        if(!recipe){
            throw new Error("Receita não encontrada")
        }

        res.status(200).send(recipe)

    }catch(error: any){
        res.status(error.statusCode || 400).send(error.sqlMessage || error.message)
    }
}

export default getRecipeAsync