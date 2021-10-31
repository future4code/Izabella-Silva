import express from 'express'
import { WalkController } from '../controller/WalkController'


export const walkRouter = express.Router()

const walkController = new WalkController()

walkRouter.post("/start-walking", (request, response) => walkController.startWalking(request, response))
walkRouter.post("/finish-walking", (request, response) => walkController.finishWalking(request, response))
walkRouter.get("/tour-duration", (request, response) => walkController.showWalking(request, response))