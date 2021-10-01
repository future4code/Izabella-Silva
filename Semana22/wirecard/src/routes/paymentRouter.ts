import express, {request, response} from 'express'
import { PaymentsController } from '../controller/PaymentsController'

export const paymentRouter = express.Router()

const paymentController = new PaymentsController()

paymentRouter.post("/create-payment", (request, response) => paymentController.createPayments(request, response))