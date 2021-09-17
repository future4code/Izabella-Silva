import { Request, Response } from "express";
import { FriendShipBusiness } from "../business/friendship/FriendShipBusiness";
import { SqlFriendshipDataBase } from "../data/SQL/SqlFriendshipDataBase";
import { SqlUserDataBase } from "../data/SQL/SqlUserDataBase";

export class FriendShipController {
    private friendShipBusiness: FriendShipBusiness
    constructor(){
        this.friendShipBusiness = new FriendShipBusiness(new SqlUserDataBase, new SqlFriendshipDataBase)
    }

    async toDoFriendship(req: Request, res: Response){
        try{
            const token = req.headers.authorization

            const {frienId} = req.body

            if(!token){
                throw new Error("Obrigatório token para fazer amizade")
            }

            if(!frienId){
                throw new Error("Deve ser enviado o id do amigo")
            }

            const friend = await this.friendShipBusiness.toDofriendShip(token, frienId)

            res.status(200).send(friend && `Amizade feita com ${friend.name}` )

        }catch(error: any){
            res.status(error.statusCode || 500).send(error.message || "Unexpected Error")
        }
    }

    async undoFriendship(req: Request, res: Response){
        try{
            const token = req.headers.authorization

            const {frienId} = req.body

            if(!token){
                throw new Error("Obrigatório token para fazer amizade")
            }

            if(!frienId){
                throw new Error("Deve ser enviado o id do amigo")
            }

            const friend = await this.friendShipBusiness.undoFriendship(token, frienId)

            res.status(200).send(friend && `Amizade desfeita com ${friend.name}` )

        }catch(error: any){
            res.status(error.statusCode || 500).send(error.message || "Unexpected Error")
        }
    }
}