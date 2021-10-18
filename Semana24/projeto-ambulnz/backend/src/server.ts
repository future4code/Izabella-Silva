import express from "express";
import dotenv from "dotenv";
import {pizzaRouter} from './routes/pizzaRouter'
import { userRouter } from './routes/userRouter'
import { ingredientsRouter } from "./routes/ingredientsRouter";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/pizza", pizzaRouter);
app.use("/ingredients", ingredientsRouter)

module.exports = app

