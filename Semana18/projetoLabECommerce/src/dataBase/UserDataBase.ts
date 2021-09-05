import { BaseDataBase } from "./BaseDataBase";
import { User } from "../entities/User";
import { UserDb } from "../types";

export class UserDataBase extends BaseDataBase{
    private TABLE_NAME = "lab_e_commerce_user"

    async create(user: UserDb){
        await BaseDataBase.connection(this.TABLE_NAME)
        .insert(user)
    }

    async getAll(){
        return BaseDataBase.connection(this.TABLE_NAME).select()
    }

    async getUserById(id: string){
        return BaseDataBase.connection(this.TABLE_NAME)
        .select()
        .where("id", "=", `${id}`)
    }
}