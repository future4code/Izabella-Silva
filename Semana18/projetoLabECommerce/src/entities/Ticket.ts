import { Product } from "./Product";

export class Ticket extends Product{
    constructor(
        protected travelOrigin: string,
        protected travelDestination: string,
        id: string,
        name: string,
        description: string,
        price: number
    ){
        super(id, name, description, price)
    }

    public getTravelOrigin(): string{
        return this.travelOrigin
    }

    public getTravelDestination(): string{
        return this.travelDestination
    }
}