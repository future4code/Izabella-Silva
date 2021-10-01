export class Card {
    constructor(
        private holderName: string,
        private number: number,
        private expirationDate: string,
        private cvv: number
    ){}

    public getHolderName(): string{
        return this.holderName
    }

    public getNumber(): number{
        return this.number
    }

    public getExpirationDate(): string{
        return this.expirationDate
    }

    public setHolderName(holderName: string){
        this.holderName = holderName
    }

    public setNumber(number: number){
        this.number = number
    }

    public setExpirationsDate(expirationDate: string){
        this.expirationDate = expirationDate
    }

    public setCvv(cvv: number){
        this.cvv = cvv
    }
}