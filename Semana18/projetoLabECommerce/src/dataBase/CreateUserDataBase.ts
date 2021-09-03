import { BaseDataBase } from "./BaseDataBase";
import { User } from "../entities/User";

export class CreateUserDataBase extends BaseDataBase{
    private TABLE_NAME = "lab_e_commerce_user"

    async create(user: User){
        await BaseDataBase.connection(this.TABLE_NAME)
        .insert(user)
    }

    async getAll(){
        return BaseDataBase.connection(this.TABLE_NAME)
        .select()
    }
}