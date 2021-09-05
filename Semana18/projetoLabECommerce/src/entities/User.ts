import { PuchasesDB } from "../types"

export class User{
    protected id: string = (Date.now() + Math.random().toString())

    constructor(
        protected name: string,
        protected email: string,
        protected age: number
    ){

    }

    public getName(): string{
        return this.name
    }

    public getEmail(): string{
        return this.email
    }

    public getAge(): number{
        return this.age
    }

    public getId(): string{
        return this.id
    }
}