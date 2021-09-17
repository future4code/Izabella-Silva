import { Purchase } from "../entities/Purchase";
import { BaseDataBase } from "./BaseDataBase";

export class PurchaseDataBase extends BaseDataBase{
    private TABLE_NAME = "lab_e_commerce_purchase"

    async createPurchase(purchase: Purchase){
        await BaseDataBase.connection(this.TABLE_NAME)
        .insert(purchase)
    }

    async getAllPurchase(){
        return await BaseDataBase.connection(this.TABLE_NAME).select()
    }

    async getPuchasesByUser(userId: string): Promise<any>{
        return await BaseDataBase.connection (this.TABLE_NAME)
            .select().where("user_id", "=", `${userId}`)
    }
}