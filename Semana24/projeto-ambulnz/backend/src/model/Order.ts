export class Order{
    constructor(
        private id: string,
        private date: Date,
        private price: number
    ){}

    public getId(): string{
        return this.id
    }

    public getDate(): Date{
        return this.date
    }

    public getPrice(): number{
        return this.price
    }


}

export interface OrderInputDTO{
    pizzaId: string,
    quantity: number
}