import { Recipes } from "../entities/Recipes";
import { BaseDataBase } from "./BaseDataBase";

export class RecipesDataBase extends BaseDataBase {
    private TABLE_NAME = "cookenu_recipe"

    async createRecipe(recipes: Recipes){
        await BaseDataBase.connection(this.TABLE_NAME)
        .insert(recipes)
    }

    async getRecipe(id: string){
        const recipe = await BaseDataBase.connection(this.TABLE_NAME)
        .select().where("id", "=", `${id}`)

        return recipe[0] && Recipes.toRecipesModel(recipe[0])
    }
}