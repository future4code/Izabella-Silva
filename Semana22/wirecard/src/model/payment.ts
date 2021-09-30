import { Card } from "./Card";

export type payment = {
    amount: number,
    type: TYPE,
    card?: Card
}

export enum TYPE{
    BOLETO = "BOLETO",
    CREDIT_CARD = "CREDIT CARD"
}