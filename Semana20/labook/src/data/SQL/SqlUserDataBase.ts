import { UserRepository } from "../../business/user/UserRepository"; 
import { User } from "../../model/User";
import { BaseDataBase } from "./BaseDataBase";

export class SqlUserDataBase extends BaseDataBase implements UserRepository{
    private TABLE_NAME: string = "labook_user"
    async save(user: User): Promise<User>{
        await BaseDataBase.connection(this.TABLE_NAME).insert(user)

        return user
    }

    async findUserByEmail(email:string): Promise<User | null>{
        const user = await BaseDataBase.connection(this.TABLE_NAME)
        .select().where("email", "=", `${email}`)

        if(!user[0]){
            return null
        }

        return user[0]
    }

    async findUserById(id: string): Promise<User | null>{
        const user = await BaseDataBase.connection(this.TABLE_NAME)
        .select().where("id", "=", `${id}`)

        if(!user[0]){
            return null
        }

        return user[0]
    }
}