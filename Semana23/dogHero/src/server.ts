import express from "express";
import dotenv from "dotenv";
import {walkRouter} from './routes/walkRouter'
import { createRouter } from "./routes/createRouter";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/dog-walk", createRouter);
app.use("/walk", walkRouter);

module.exports = app

