import { DogWalk } from "../model/DogWalk";

export interface WalkRepository{
    createWalk(dogWalk: DogWalk): Promise<void>
    getElementById(id: string): Promise<DogWalk | null>
    insertStartWalk(id: string, startWalk: number): Promise<void>
    insertFinishWalk(id: string, finishWalk: number): Promise<void>
    updateStatus(id:string, status: string): Promise<void>
}