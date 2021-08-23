import { Request, Response } from "express"
import selectAllUsers from '../queries/selectAllUsers'

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const sort = req.query.sort || "email"
       const order = req.query.order || "asc"

       if(sort !== "name" && sort !== "email"){
          res.statusCode = 422
          throw new Error("Expected 'name' or 'email'")
       }

       if(order !== "desc" && order !== "asc"){
         res.statusCode = 422
         throw new Error("Expected 'desc' or 'asc'")
      }

       const users = await selectAllUsers(sort,order)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {

      if(res.statusCode === 200){
         res.status(500).send("Unexpected Error")
      }else{
         res.send(error.message || error.sqlMessage)
      }
             
    }
 }
