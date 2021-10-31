import {Request, Response} from 'express'
import { CreateBusiness } from '../business/CreateBusiness';
import { DogWalkDataBase } from '../data/DogWalkDataBase';
import {DogWalkInputDTO } from "../model/DogWalk";
import { IdGenerator } from '../services/IdGenerator';
export class CreateController {
    private createBusiness: CreateBusiness
    
    constructor(){
        this.createBusiness = new CreateBusiness(
            new IdGenerator(),
            new DogWalkDataBase()
            )
    }
    async createWalk(req: Request, res: Response){
        try{
            const input: DogWalkInputDTO = {
                date: req.body.date,
                duration: req.body.duration,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                numberOfPets: req.body.numberOfPets,
                startTime: req.body.startTime,
                endTime: req.body.endTime
            }

            if(!input.date || !input.duration || !input.latitude || !input.longitude || !input.numberOfPets || !input.startTime || !input.endTime){
                throw new Error("Os campos 'date', 'duration', 'latitude', 'longitude', 'numberOfPets', 'startTime' e 'endTime' são obrigatórios")
            }

            const result = await this.createBusiness.createWalk(input)

            res.status(200).send(result)

        }catch(error: any){
            res.status(error.statusCode || 400).send(error.message || "Unexpected Error")
        }
    }
}