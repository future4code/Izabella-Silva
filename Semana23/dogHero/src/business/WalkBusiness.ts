import { DogWalkDataBase } from "../data/DogWalkDataBase";
import { DogWalk, DogWalkOutputDTO } from "../model/DogWalk";


export class WalkBusiness{

    constructor(
        private dogWalkDataBase: DogWalkDataBase
    ){
    }

    async startWalk(walkId: string): Promise<any>{
        const dogWalk = await this.dogWalkDataBase.getElementById(walkId)

        const date = new Date().toISOString().slice(0, 19).replace('T', ' ')

        await this.dogWalkDataBase.insertStartWalk(walkId, date)
        await this.dogWalkDataBase.updateStatus(walkId,"PASSEANDO")

        return {message: "Inicio da caminhada inserida com sucesso"}
    }

    async finishWalk(walkId: string): Promise<any>{
        const dogWalk = this.dogWalkDataBase.getElementById(walkId)

        const date = new Date(Date.now())

        await this.dogWalkDataBase.insertFinishWalk(walkId, date)
        await this.dogWalkDataBase.updateStatus(walkId,"FINALIZADO")

        return {message: "Término da caminhada inserida com sucesso"}
    }

    async showWalking(walkId: string): Promise<any>{
        const dogWalk = this.dogWalkDataBase.getElementById(walkId)

        const walkDuration = dogWalk

        return {walkDuration: walkDuration}
    }
}