import { Request, Response } from "express";
import { RecipesDataBase } from "../data/RecipesDataBase";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Autenticator";
import { USER_ROLES } from "../types";

const deleteUserAsync = async(
    req: Request,
    res: Response
): Promise<void> => {
    try{
        const token = req.headers.authorization
        const userId = req.params.id

        if(!token){
            throw new Error("Usuário deve estar logado")
        }

        const authenticator = new Authenticator()
        const user = authenticator.getTokenData(token)

        if(user && user.role !== USER_ROLES.ADMIN){
            throw new Error("Apenas administrador pode deletar usuário")
        }

        const userDataBase = new UserDataBase()
        const verifyUserToDelete = await userDataBase.getUserById(userId)

        if(!verifyUserToDelete){
            throw new Error("Usuário inexistente")
        }

        const recipesDataBase =  new RecipesDataBase()
        const recipes = await recipesDataBase.getRecipeByUserId(userId)

        if(recipes){
            Promise.all(
                recipes.map(async (recipe: any) => {
                    const recipesDataBase = new RecipesDataBase()
                    await recipesDataBase.deleteRecipe(recipe.id)
                })
            )
        }

        userDataBase.deleteUserById(userId)

        res.status(200).send("Usuário deletado com sucesso")

    }catch(error: any){
        res.status(error.statusCode || 400).send(error.sqlMessage || error.message)
    }

}

export default deleteUserAsync