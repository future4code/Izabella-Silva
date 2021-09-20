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

    async getRecipeByUserId(id: string): Promise<any> {
        const recipe = await BaseDataBase.connection(this.TABLE_NAME)
        .select().where("user_id", "=", `${id}`)

        return recipe
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

    async getRecipeByIdAndUserId(recipeId: string, userId: string): Promise<any>{
        const recipe = await BaseDataBase.connection.raw(`
        SELECT * FROM ${this.TABLE_NAME}
        WHERE id = '${recipeId}' AND user_id = '${userId}';
        `)

        return recipe[0]
    }

    async editRecipe(recipeId: string, title: string, description: string){
        await BaseDataBase.connection.raw(`
        UPDATE cookenu_recipe
        SET title = '${title}', description='${description}'
        WHERE id='${recipeId}';
        `)
    }

    async deleteRecipe(recipeId: string){
        await BaseDataBase.connection(this.TABLE_NAME)
        .delete().where("id", "=", `${recipeId}`)
    }
}