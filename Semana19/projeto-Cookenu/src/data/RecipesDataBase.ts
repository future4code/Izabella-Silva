import { Recipes } from "../entities/Recipes";
import { BaseDataBase } from "./BaseDataBase";

export class RecipesDataBase extends BaseDataBase {
    private TABLE_NAME = "cookenu_recipe"

    async createRecipe(recipes: Recipes){
        await BaseDataBase.connection(this.TABLE_NAME)
        .insert(recipes)
    }

    async getRecipe(id: string): Promise<any>{
        const recipe = await BaseDataBase.connection(this.TABLE_NAME)
        .select().where("id", "=", `${id}`)

        return recipe[0]
    }

    async getFeedRecipes(followId: string): Promise<any>{
        const recipe = await BaseDataBase.connection.raw(`
        SELECT r.id, r.title, r.description, r.createdAt, r.user_id as userId, u.name FROM ${this.TABLE_NAME} r
        jOIN cookenu_user u
        ON u.id = '${followId}'
        WHERE r.user_id = '${followId}'
        `)

        return recipe[0]
    }

    async editRecipe(recipeId: string, userId:string){
        
    }
}