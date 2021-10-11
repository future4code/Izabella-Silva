import { DogWalkDataBase } from "../data/DogWalkDataBase";
import { DogWalk, DogWalkInputDTO } from "../model/DogWalk";
import { IdGenerator } from "../services/IdGenerator";

export class CreateBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private dogWalkDataBase: DogWalkDataBase
    ){}

    async createWalk(input: DogWalkInputDTO): Promise<any> {

        let price = 0

        if(input.duration === 30){
            if(input.numberOfPets === 1){
                price === 25
            }else{
                price === 25 + 15*(input.numberOfPets-1)
            }
        }else if(input.duration === 60){
            if(input.numberOfPets === 1){
                price === 35
            }else{
                price === 35 + 20*(input.numberOfPets-1)
            }
        }

        await this.dogWalkDataBase.createWalk(
            DogWalk.toDogWalk({
                ...input,
                id: this.idGenerator.generate(),
                price: price
            })
        )

        return {message: "Passeio criado com sucesso"}
    }
}