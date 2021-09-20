export class Product{
    constructor(
        protected id: string,
        protected name: string,
        protected description: string,
        protected price: number,
    ){

    }
    
    public getProductId(): string{
        return this.id
    }

    public getProductName(): string{
        return this.name
    }

    public getProductDescription(): string{
        return this.description
    }

    public getProductPrice(): number {
        return this.price
    }
}