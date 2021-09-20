import { Product } from "./Product";

export class Ticket extends Product{
    constructor(
        protected travel_origin: string,
        protected travel_destination: string,
        id: string,
        name: string,
        description: string,
        price: number
    ){
        super(id, name, description, price)
    }

    public getTravelOrigin(): string{
        return this.travel_origin
    }

    public getTravelDestination(): string{
        return this.travel_destination
    }
}