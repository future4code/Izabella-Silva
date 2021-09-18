import { Request, Response } from "express";
import { FeedBusiness } from "../business/feed/feedBusiness";
import { SqlFeedDataBase } from "../data/SQL/SqlFeedDataBase";
import { SqlFriendshipDataBase } from "../data/SQL/SqlFriendshipDataBase";

export class FeedController{
    private feedBusiness: FeedBusiness

    constructor(){
        this.feedBusiness = new FeedBusiness(new SqlFeedDataBase, new SqlFriendshipDataBase)
    }

    async getFeedFriendships(req: Request, res: Response){
        try{
            const token = req.headers.authorization as string

            const feedFriendships = await this.feedBusiness.getFeedFriendships(token)

            res.status(200).send(feedFriendships)

        }catch(error: any){
            res.status(error.statusCode || 500).send(error.message || "Unexpected Error")
        }
    }
}