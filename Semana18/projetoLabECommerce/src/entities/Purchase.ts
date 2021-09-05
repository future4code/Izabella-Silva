export class Purchase{
    protected purchase_id: string = (Date.now() + Math.random().toString())

    constructor(
        protected product_id: string,
        protected user_id: string,
        protected quantity: number,
        protected total_amount: number
    ){

    }

    public getProductId(): string{
        return this.product_id
    }

    public getUserId(): string{
        return this.user_id
    }
}