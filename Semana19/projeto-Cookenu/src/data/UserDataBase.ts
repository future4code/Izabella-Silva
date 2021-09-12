import { User } from "../entities/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase{
    private TABLE_NAME = "cookenu_user"

    async createUser(user: User) {
        await BaseDataBase.connection(this.TABLE_NAME)
        .insert(user)
    }

    async getUserByEmail(email: string): Promise<User>{
        const user = await BaseDataBase.connection(this.TABLE_NAME)
        .select().where("email", "=", `${email}`)
        
        return user[0] && User.toUserModel(user[0]);
    }

    async getUserById(id: string): Promise<User>{
        const user = await BaseDataBase.connection(this.TABLE_NAME)
        .select().where("id", "=", `${id}`)
        
        return user[0] && User.toUserModel(user[0]);
    }

    async deleteUserById(id: string){
        await BaseDataBase.connection(this.TABLE_NAME)
        .delete().where("id", "=", `${id}`)
    }

    async changePassword(id: string, password: string){
        await BaseDataBase.connection.raw(`
        UPDATE ${this.TABLE_NAME}
        SET password = "${password}"
        WHERE id = "${id}"
        `)
    }
}