import { Industry } from "./Industry";
import { Client } from "../interfaces/Client";

export class IndustrialClient extends Industry implements Client{
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industrialRegister: number,
        machinesQuantity: number,
        cep: string
    ){
        super(machinesQuantity, cep)
    }

    public getIndustrialRegister(): number{
        return this.industrialRegister
    }

    public calculateBill(): number{
        return this.consumedEnergy*0.45 + this.machinesQuantity*100
    }
}