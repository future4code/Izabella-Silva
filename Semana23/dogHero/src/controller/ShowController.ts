import { Request, Response } from "express";
import { InvalidInputError } from "../error/InvalidInputError";

export class ShowController{

    async showWalking(req: Request, res: Response){
        try{


        }catch(error: any){
            res.status(error.statusCode || 400).send(error.message || "Unexpected Error")
        }
    }
}