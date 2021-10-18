import { Order } from "../model/Order";
import { BaseDataBase } from "./BaseDataBase";

export class OrderDataBase extends BaseDataBase{
    async createOrder(order: Order): Promise<void>{
        await this.getConnection()
        .insert({
            id: order.getId(),
            date: order.getDate(),
            price: order.getPrice()
        })
        .into(this.tableNames.restaurantOrder)
    }

    async relationOrderAndUser(orderId: string, userId: string){
        await this.getConnection()
        .insert({
            order_id: orderId,
            user_id: userId
        })
        .into(this.tableNames.restaurantOrder)
    }

    async relationOrderAndPizza(orderId: string, pizzaId: string){
        await this.getConnection()
        .insert({
            order_id: orderId,
            pizza_id: pizzaId
        })
        .into(this.tableNames.restaurantOrder)
    }
}