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
        .into(this.tableNames.restaurantUserOrder)
    }

    async relationOrderAndPizza(orderId: string, pizzaId: string, quantity: number){
        await this.getConnection()
        .insert({
            order_id: orderId,
            pizza_id: pizzaId,
            quantity: quantity
        })
        .into(this.tableNames.orderPizza)
    }

    async getOrderById(orderId: string): Promise<any>{
        const order = await this.getConnection()
        .select("*")
        .from(this.tableNames.restaurantOrder)
        .where("id", "=", `${orderId}`)

        return order[0]
    }

    async getPizzaIdByOrderAndUserId(orderId: string, userId: string){
        const pizzas = await this.getConnection()
        .raw(`
        SELECT p.pizza_id as pizzaId, quantity
        FROM ${this.tableNames.orderPizza} p
        LEFT JOIN ${this.tableNames.restaurantUserOrder} u
        ON u.order_id = '${orderId}'
        WHERE u.user_id = '${userId}'
        `)

        return pizzas[0]
    }
}