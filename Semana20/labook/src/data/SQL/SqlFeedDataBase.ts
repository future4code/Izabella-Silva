import { FeedRepository } from "../../business/feed/feedRepository";
import { BaseDataBase } from "./BaseDataBase";

export class SqlFeedDataBase extends BaseDataBase implements FeedRepository{
    private USER_TABLE = "labook_user"
    private POST_TABLE = "labook_post"

    async getFeedFriendship(friendId: string): Promise<any>{
        
        const post = await BaseDataBase.connection.raw(`
        SELECT u.id as userId, u.name, p.id as postId, image, description, criation_date as criationDate,
        type FROM ${this.POST_TABLE} p
        LEFT JOIN ${this.USER_TABLE} u
        ON u.id = '${friendId}'
        WHERE user_id = '${friendId}'
        `)

        if(!post[0].length){
            return null
        }

        return post[0]
    } 
}