import { Product } from "../entities/Product";
import { BaseDataBase } from "./BaseDataBase";

export class ProductDataBase extends BaseDataBase{
    private TABLE_NAME = "lab_e_commerce_product"


    async create(product: Product){
        await BaseDataBase.connection(this.TABLE_NAME)
        .insert(product)
    }

    async getAll(order: any){
        return  BaseDataBase.connection(this.TABLE_NAME)
        .select()
        .orderBy(order)
    }

    async getAllTravels(){
        return BaseDataBase.connection(this.TABLE_NAME)
        .where("travel_origin", "<>", "NULL")
        .where("travel_destination", "<>", "NULL")
    }

    async getProductById(product_id: string){
        return BaseDataBase.connection(this.TABLE_NAME)
        .where("id", "=", `${product_id}`)
    }
}