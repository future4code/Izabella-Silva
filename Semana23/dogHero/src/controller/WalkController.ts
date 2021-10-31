import { Request, Response } from "express";
import { WalkBusiness } from "../business/WalkBusiness";
import { DogWalkDataBase } from "../data/DogWalkDataBase";
export class WalkController{
    private walkBusiness: WalkBusiness

    constructor(){
        this.walkBusiness = new WalkBusiness(new DogWalkDataBase)
    }

    async startWalking(req: Request, res: Response){
        try{
            const walkId = req.body.walkId

            const result = await this.walkBusiness.startWalk(walkId)
            
            res.status(200).send(result)

        }catch(error: any){
            res.status(error.statusCode || 400).send(error.message || "Unexpected Error")
        }
    }

    async finishWalking(req: Request, res: Response){
        try{
            const walkId = req.body.walkId

            const result = await this.walkBusiness.finishWalk(walkId)
            
            res.status(200).send(result)

        }catch(error: any){
            res.status(error.statusCode || 400).send(error.message || "Unexpected Error")
        }
    }

    async showWalking(req: Request, res: Response){
        try{
            const walkId = req.body.walkId

            const result = await this.walkBusiness.showWalking(walkId)
            
            res.status(200).send(result)

        }catch(error: any){
            res.status(error.statusCode || 400).send(error.message || "Unexpected Error")
        }
    }
}