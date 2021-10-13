import { DogWalk, DogWalkOutputDTO } from "../model/DogWalk";
import { BaseDataBase } from "./BaseDataBase";

export class DogWalkDataBase extends BaseDataBase{
    async createWalk(dogWalk: DogWalk): Promise<void>{
        await this.getConnection()
        .insert({
            id: dogWalk.getId(),
            date: dogWalk.getDate(),
            price: dogWalk.getPrice(),
            duration: dogWalk.getDuration(),
            latitude: dogWalk.getLatitude(),
            longitude: dogWalk.getLongitude(),
            number_of_pets: dogWalk.getNumberOfPets(),
            start_time: dogWalk.getStartTime(),
            end_time: dogWalk.getEndTime()
        })
        .into(this.tableNames.dogWalking)
    }

    async getElementById(id: string): Promise<DogWalk | null>{
        const walk = await this.getConnection()
        .select()
        .from(this.tableNames.dogWalking)
        .where("id", "=", `${id}`)

        if(!walk[0]){
            throw new Error("Passeio não encontrado pelo id informado")
        }

        return DogWalk.toDogWalk(walk[0])
    }

    async insertStartWalk(id: string, startWalk: string): Promise<void>{
        await this.getConnection()
        .insert({
            start_walk: `${startWalk}`
        })
        .into(this.tableNames.dogWalking)
        .where("id", "=", `${id}`)
    }

    async insertFinishWalk(id: string, finishWalk: Date): Promise<void>{
        await this.getConnection()
        .insert({
            finish_walk: finishWalk
        })
        .into(this.tableNames.dogWalking)
        .where("id", "=", `${id}`)
    }

    async updateStatus(id:string, status: string): Promise<void>{
        await this.getConnection().raw(`
        UPDATE ${this.tableNames.dogWalking}
        SET status = '${status}'
        WHERE id = '${id}'
        `)
    }
}