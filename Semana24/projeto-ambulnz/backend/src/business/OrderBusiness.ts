import { OrderDataBase } from "../data/OrderDataBase";
import { OrderInputDTO } from "../model/Order";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class OrderBusiness{
    constructor(
        private orderDataBase: OrderDataBase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ){}

    async createOrder(input: OrderInputDTO[], token: string): Promise<any>{
        
    }

    async getOrder(orderId: string, token: string): Promise<any>{

    }
}