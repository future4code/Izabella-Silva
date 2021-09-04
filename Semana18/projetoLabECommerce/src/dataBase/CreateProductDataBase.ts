import { Product } from "../entities/Product";
import { BaseDataBase } from "./BaseDataBase";

export class CreateProductDataBase extends BaseDataBase{
    private TABLE_NAME = "lab_e_commerce_product"


    async create(product: Product){
        console.log(Product)
        await BaseDataBase.connection(this.TABLE_NAME)
        .insert(product)
    }

    async getAll(){
        return  BaseDataBase.connection(this.TABLE_NAME).select()
    }

    async getAllTravels(){
        return BaseDataBase.connection(this.TABLE_NAME)
        .where("travel_origin", "<>", "NULL")
        .where("travel_destination", "<>", "NULL")
    }
}