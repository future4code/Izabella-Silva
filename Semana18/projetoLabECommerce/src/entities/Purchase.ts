export class Purchase{
    constructor(
        protected productId: string,
        protected userId: string
    ){

    }

    public getProductId(): string{
        return this.productId
    }

    public getUserId(): string{
        return this.userId
    }
}