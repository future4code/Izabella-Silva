import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function getAllRecipes(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const title = req.query.title || "%"
      const sort = req.query.sort || "created_at"
      const order = req.query.order || "asc"
      const page = Number(req.query.page) || 1
      const size = Number(req.query.size) || 10

      if(sort !== "created_at" && sort !== "title"){
         res.statusCode=422
         throw new Error("sort must be either 'created_at' or 'title'")
      }

      if(order !== "asc" && order !== "desc"){
         res.statusCode=422
         throw new Error("sort must be either 'asc' or 'desc'")
      }

      const offset = size * (page - 1)

      const result = await connection("aula49_recipes")
      .where("title", "LIKE", `%${title}%`)
      .orderBy(sort, order)
      .limit(size)
      .offset(offset)
      
      const recipes = result.map(toRecipe)

      res.status(200).send(recipes)

   } catch (error) {

      if(res.statusCode === 200){
         res.status(500).send("Internal server error")
      }else{
         res.send(error.message)
      }
      
   }
}

const toRecipe = (input: any): recipe => {
   return {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   }
}