import express from "express";
import dotenv from "dotenv";
import {paymentRouter} from './routes/paymentRouter'

dotenv.config();

const app = express();

app.use(express.json());

app.use("/payment", paymentRouter);

module.exports = app