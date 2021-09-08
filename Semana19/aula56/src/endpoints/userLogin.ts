import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { getUserByEmail } from "../data/connection";
import { generateToken } from "../services/generateToken";

export default async function userLogin(
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

      const userData = await getUserByEmail(req.body.email)
      const verifyPassword = await compare(req.body.password, userData.password)

      if(!verifyPassword || !userData.length){
          throw new Error("E-mail ou senha inválidos")
      }

      const token = generateToken({id: userData.id, role: userData.role})

      res.status(200).send(token)

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.sqlMessage || error.message })
      }
   }
}