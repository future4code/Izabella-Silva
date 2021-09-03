export class Product{
    constructor(
        protected productId: string,
        protected productName: string,
        protected productDescription: string,
        protected productPrice: number
    ){

    }
    
    public getProductId(): string{
        return this.productId
    }

    public getProductName(): string{
        return this.productName
    }

    public getProductDescription(): string{
        return this.productDescription
    }

    public getProductPrice(): number {
        return this.productPrice
    }
}