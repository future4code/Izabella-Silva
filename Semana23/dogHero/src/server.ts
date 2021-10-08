import express from "express";
import dotenv from "dotenv";
import {showRouter} from './routes/showRouter'

dotenv.config();

const app = express();

app.use(express.json());

app.use("/payment", showRouter);

module.exports = app