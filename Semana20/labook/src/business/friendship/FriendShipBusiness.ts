import { Authenticator } from "../../services/Autenticator"
import {UserRepository} from '../user/UserRepository'
import { FriendshipRepository } from "./FriendShipRepository"

export class FriendShipBusiness{
    private userDataBase: UserRepository
    private friendshipDataBase: FriendshipRepository
    constructor(
        userDataBase: UserRepository,
        friendshipDataBase: FriendshipRepository
    ){
        this.userDataBase = userDataBase
        this.friendshipDataBase = friendshipDataBase
    }

    async toDofriendShip(token: string, friendId: string){
        const authenticator = new Authenticator()
        const user = authenticator.getTokenData(token)

        if(!user){
            throw new Error("Usuário não encontrado ou não autorizado")
        }

        const friend = this.userDataBase.findUserById(friendId)

        if(!friend){
            throw new Error("Amigo não encontrado")
        }

        await this.friendshipDataBase.createFriendship(user.id, friendId)

        return friend
    }

    async undoFriendship(token: string, friendId: string){
        const authenticator = new Authenticator()
        const user = authenticator.getTokenData(token)

        if(!user){
            throw new Error("Usuário não encontrado ou não autorizado")
        }

        const friend = this.userDataBase.findUserById(friendId)

        if(!friend){
            throw new Error("Amigo não encontrado")
        }

        await this.friendshipDataBase.deleteFriendship(user.id,friendId)

        return friend

    }
}