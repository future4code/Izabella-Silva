import { BaseDataBase } from "./BaseDataBase";
import { userFollow } from "../types";

export class FollowDataBase extends BaseDataBase{
    private TABLE_NAME = "cookenu_follow"

    async createdFollow(userFollow: userFollow){
        await BaseDataBase.connection(this.TABLE_NAME)
        .insert(userFollow)
    }

    async deleteFollow(userFollowId: string){
        await BaseDataBase.connection(this.TABLE_NAME)
        .delete().where("id_user_follow", "=", `${userFollowId}`)
    }

    async getFollowsByUserId(id: string): Promise<any>{
        const feed = await BaseDataBase.connection(this.TABLE_NAME)
        .where("id_user", "=", `${id}`)

        return feed
    }
}