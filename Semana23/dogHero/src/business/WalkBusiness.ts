import { DogWalkDataBase } from "../data/DogWalkDataBase";
import { DogWalk, DogWalkOutputDTO } from "../model/DogWalk";


export class WalkBusiness{

    constructor(
        private dogWalkDataBase: DogWalkDataBase
    ){
    }

    async startWalk(walkId: string): Promise<any>{
        const dogWalk = await this.dogWalkDataBase.getElementById(walkId)

        const date = Number(new Date())

        await this.dogWalkDataBase.insertStartWalk(walkId, date)
        await this.dogWalkDataBase.updateStatus(walkId,"PASSEANDO")

        return {message: "Inicio da caminhada inserida com sucesso"}
    }

    async finishWalk(walkId: string): Promise<any>{
        const dogWalk = await this.dogWalkDataBase.getElementById(walkId)

        const date = Number(new Date())

        await this.dogWalkDataBase.insertFinishWalk(walkId, date)
        await this.dogWalkDataBase.updateStatus(walkId,"FINALIZADO")

        return {message: "Término da caminhada inserida com sucesso"}
    }

    async showWalking(walkId: string): Promise<any>{
        const dogWalk = await this.dogWalkDataBase.getElementById(walkId)
        const finishDate = Number(dogWalk?.getFinishWalk())
        const startDate = Number(dogWalk?.getStartWalk())

        const walkDuration = (new Date(finishDate - startDate)).toISOString().slice(0, 19).split("T")[1]

        return {walkDuration: walkDuration}
    }
}