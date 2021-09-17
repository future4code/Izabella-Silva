import { USER_ROLES } from "../types";

export class User{
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: string
    ){}

    getId(): string{
        return this.id
    }

    getName(): string{
        return this.name
    }

    getEmail(): string{
        return this.email
    }

    getPassword(): string{
        return this.password
    }

    getRole(): string{
        return this.role
    }

    static toUserModel(data:any): User{
        return new User(data.id, data.name, data.email, data.password, data.role)
    }
}