import dotenv from "dotenv";
import {AddressInfo} from "net";
import express from "express";
import {paymentRouter} from './routes/paymentRouter'

dotenv.config();
const app = express();

app.use(express.json());

app.use("/payment", paymentRouter);

const server = app.listen(3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });