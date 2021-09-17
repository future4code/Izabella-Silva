import { Request, Response } from "express";
import { RecipesDataBase } from "../data/RecipesDataBase";
import { Recipes } from "../entities/Recipes";
import { Authenticator } from "../services/Autenticator";
import { IdGenerator } from "../services/IdGenerator";

const createRecipesAsync = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const token = req.headers.authorization as string
        const {title, description} = req.body

        if(!title || !description){
            throw new Error("Titulo e descrição são obrigatórios")
        }

        if(typeof title !== "string" || typeof description !== "string"){
            throw new Error("Os campos 'title' e 'description' devem ser do tipo string")
        }

        if(!token){
            throw new Error("Obrigatório autorização")
        }

        const authenticator = new Authenticator
        const user = await authenticator.getTokenData(token)

        if(!user){
            throw new Error("Usuário não autorizado")
        }

        const id = new IdGenerator().generateId()
        const date = new Date(Date.now())

        const recipe = new Recipes(id, title, description, date, user.id)

        const recipesDataBase = new RecipesDataBase()
        await recipesDataBase.createRecipe(recipe)

        res.status(200).send("Receita criada com sucesso")
    }catch(error: any){
        res.status(error.statusCode || 400).send(error.sqlMessage || error.message)
    }
}

export default createRecipesAsync