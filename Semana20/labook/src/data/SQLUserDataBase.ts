import { User } from "../model/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase{
    private TABLE_NAME: string = "labook_user"
    async save(user: User){
        await BaseDataBase.connection(this.TABLE_NAME).insert(user)
    }

    async findUserByEmail(email:string){
        const user = await BaseDataBase.connection(this.TABLE_NAME)
        .select().where("email", "=", `${email}`)

        if(!user[0]){
            return null
        }

        return user[0]
    }
}