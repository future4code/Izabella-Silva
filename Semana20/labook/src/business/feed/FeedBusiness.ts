import { Authenticator } from "../../services/Autenticator";
import { FriendshipRepository } from "../friendship/FriendshipRepository";
import { FeedRepository } from "./feedRepository";

export class FeedBusiness{
    private feedDataBase: FeedRepository
    private friendshipDataBase: FriendshipRepository

    constructor(
        feedDataBase: FeedRepository,
        friendshipDataBase: FriendshipRepository
    ){
        this.feedDataBase = feedDataBase
        this.friendshipDataBase = friendshipDataBase
    }

    async getFeedFriendships(token: string){
        const authenticator = new Authenticator()
        const user = authenticator.getTokenData(token)

        if(!user){
            throw new Error("Usuário não encontrado ou não autorizado")
        }

        const friendships = await this.friendshipDataBase.findFriendship(user.id)

        const friendShipArray: Array<string> = []

        friendships.map((friend: any) => {
            if(friend.friend_id_1 !== user.id){
                friendShipArray.push(friend.friend_id_1)
            }else if(friend.friend_id_2 !== user.id){
                friendShipArray.push(friend.friend_id_2)
            }
        })

        const feedFriendship = await Promise.all(friendShipArray.map(async(user) => {
            const posts = await this.feedDataBase.getFeedFriendship(user)
            return posts
        }))

        return feedFriendship

    }
}