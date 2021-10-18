import express, { request, response } from 'express'
import { OrderController } from '../controller/OrderController'

export const orderRouter = express.Router()

const orderController = new OrderController()

orderRouter.post("/create", (request, response) => orderController.createOrder(request, response))
orderRouter.get("/:orderId", (request, response) => orderController.getOrder(request, response))