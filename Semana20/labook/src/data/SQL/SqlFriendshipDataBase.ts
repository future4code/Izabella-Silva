import { FriendshipRepository } from "../../business/friendship/FriendShipRepository";
import { BaseDataBase } from "./BaseDataBase";

export class SqlFriendshipDataBase extends BaseDataBase implements FriendshipRepository{
    private TABLE_NAME = "labook_friendship"

    async createFriendship(friend_id_1: string, friend_id_2: string): Promise<string>{
        await BaseDataBase.connection(this.TABLE_NAME)
        .insert({
            friend_id_1: `${friend_id_1}`,
            friend_id_2: `${friend_id_2}`
        })

        return friend_id_2
    }

    async deleteFriendship(friendId1: string, friendId2: string): Promise<string>{
        await BaseDataBase.connection(this.TABLE_NAME)
        .delete()
        .where("friend_id_1" , "=", `${friendId1}`)
        .where("friend_id_2" , "=", `${friendId2}`)

        await BaseDataBase.connection(this.TABLE_NAME)
        .delete()
        .where("friend_id_1" , "=", `${friendId2}`)
        .where("friend_id_2" , "=", `${friendId1}`)

        return friendId1
    }
}