import { Place } from "../abstract class/Place";

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        cep: string
    ){
        super(cep)
    }

    getFloorsQuantity(): number{
        return this.floorsQuantity
    }

    setFloorsQuantity(newquantity: number){
        this.floorsQuantity = newquantity
    }
}