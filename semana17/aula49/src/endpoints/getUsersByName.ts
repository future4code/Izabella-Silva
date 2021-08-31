import { Request, Response } from "express"
import selectUsersByName from "../queries/selectUsersByName"

export const getUsersByName = async(req: Request,res: Response): Promise<void> =>{
   try {

      const name = req.query.name

      if(typeof name !== "string"){
         res.statusCode = 404
         throw new Error("Expected string")
      }

      const users = await selectUsersByName(name)
 
      if(!users.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }
 
      res.status(200).send(users)
       
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}
