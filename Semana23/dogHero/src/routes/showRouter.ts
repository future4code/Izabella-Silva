import express, {request, response} from 'express'
import { ShowController } from '../controller/ShowController'

export const showRouter = express.Router()

const showController = new ShowController()

showRouter.post("/tour-duration", (request, response) => showController.showWalking(request, response))