import { UserRepository } from "../../business/UserRepository";
import { User } from "../../model/User";

export class MemoryUserDataBase implements UserRepository{
    private users: User[]

    constructor(){
        this.users = []
    }

    async save(user: User): Promise<User>{
        this.users.push(user)

        return user
    }

    async findUserByEmail(email: string): Promise<any>{
        return this.users.find(user => user.email === email)
    }
}