import { DogWalkDataBase } from "../data/DogWalkDataBase";
import { DogWalk, DogWalkInputDTO } from "../model/DogWalk";
import { IdGenerator } from "../services/IdGenerator";
import { WalkRepository } from "./WalkRepository";

export class CreateBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private dogWalkDataBase: WalkRepository
    ){}

    async createWalk(input: DogWalkInputDTO): Promise<any> {

        const price = await this.calculatePrice(input)
        input.date = input.date.split("/").reverse().join("/")

        await this.dogWalkDataBase.createWalk(
            DogWalk.toDogWalk({
                ...input,
                id: this.idGenerator.generate(),
                price: price
            })
        )

        return {message: "Passeio criado com sucesso"}
    }

    async calculatePrice(input: DogWalkInputDTO): Promise<number | undefined>{

        if(input.duration === 30){
            if(input.numberOfPets === 1){
                return 25
            }else{
                return 25 + 15*(input.numberOfPets-1)
            }
        }else if(input.duration === 60){
            if(input.numberOfPets === 1){
                return 35
            }else{
                return 35 + 20*(input.numberOfPets-1)
            }
        }
    }
}