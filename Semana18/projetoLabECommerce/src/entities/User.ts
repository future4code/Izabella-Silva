import { PuchasesDB } from "../types"
import { Purchase } from "./Purchase"

export class User{
    protected id: string = (Date.now() + Math.random().toString())
    

    constructor(
        protected name: string,
        protected email: string,
        protected age: number,
        readonly purchases: PuchasesDB[] = []
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

    public addPurchases(purchase: PuchasesDB){
        this.purchases.push(purchase)
    }

    public getAllPurchases(): PuchasesDB[]{
        return this.purchases
    }
}