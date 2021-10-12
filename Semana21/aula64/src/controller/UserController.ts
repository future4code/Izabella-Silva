import { Request, Response } from "express";
import {UserBusiness} from "../business/UserBusiness";
import { UserDatabase } from "../data/UserDatabase";
import { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";

export class UserController {
   constructor(private userBusiness: UserBusiness) {
   }

   public async signup(req: Request, res: Response) {
      try {
         const { name, role, email, password } = req.body
         const result = await this.userBusiness.signup(
            name,
            email,
            password,
            role
         );
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async login(req: Request, res: Response) {
      try {
         const { email, password } = req.body
         const result = await this.userBusiness.login(email, password);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }
}

const userDatabase = new UserDatabase()
const idGenerator = new IdGenerator()
const hashGenerator = new HashGenerator()
const userBusiness = new UserBusiness(userDatabase, idGenerator, hashGenerator)
const userController = new UserController(userBusiness)

export default userController