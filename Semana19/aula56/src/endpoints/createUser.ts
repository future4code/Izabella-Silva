import { Request, Response } from "express";
import { generateId } from "../services/generateId";
import { createUserDB } from "../data/connection";
import { generateToken } from "../services/generateToken";
import { hash } from "../services/generateHash";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
         throw new Error("E-mail Inválido");
      }
      if (!req.body.password || req.body.password.length < 6) {
         throw new Error("Senha Iválida");
      }
      if(!req.body.role || req.body.role !== "ADMIN" || req.body.role !== "NORMAL"){
         throw new Error("Obrigatório preencher 'ADMIN' ou 'NORMAL' para role")
      }

      const id = generateId()

      const generateHash = await hash(req.body.password)

      await createUserDB(id, req.body.email, generateHash)

      const token = generateToken({id: id, role: req.body.role})
      
      res.status(201).send({ token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.sqlMessage || error.message })
      }
   }
}