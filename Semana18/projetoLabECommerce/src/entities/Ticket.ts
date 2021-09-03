import { Product } from "./Product";

export class Ticket extends Product{
    constructor(
        protected travelOrigin: string,
        protected travelDestination: string,
        productId: string,
        productName: string,
        productDescription: string,
        productPrice: number
    ){
        super(productId, productName, productDescription, productPrice)
    }

    public getTravelOrigin(): string{
        return this.travelOrigin
    }

    public getTravelDestination(): string{
        return this.travelDestination
    }
}