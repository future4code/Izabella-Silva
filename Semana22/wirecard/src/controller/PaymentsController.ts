import { Request, Response } from "express";
import { PaymentBusiness } from "../business/PaymentBusiness"; 
import { Buyer } from "../model/Buyer";
import { Card } from "../model/Card";
import { payment, TYPE } from "../model/payment";

export class PaymentsController{

    async createPayments(req: Request, res: Response){
        try{

            const clientId = req.body.clientId

            const inputBuyer = {
                name: req.body.buyerName,
                email: req.body.buyerEmail,
                cpf: req.body.buyerCpf
            }

            let inputPayment: payment
            const amount = req.body.paymentAmount
            const type = (req.body.paymentType as string).toUpperCase()
            let card: Card

            if(!clientId || !inputBuyer.name || !inputBuyer.email
                || !inputBuyer.cpf || !amount || !type)
            {
                throw new Error("Os parâmetros clienteId, buyerName, buyerEmail, buyerCpf, paymentAmount e paymentType são obrigatórios")
            }

            if(type === TYPE.BOLETO){
                inputPayment = {
                    amount,
                    type
                }
            }else if(type === TYPE.CREDIT_CARD){
                const inputCard = {
                    holderName: req.body.cardHolderName,
                    number: req.body.cardNumber,
                    expirationDate: req.body.cardExpirationDate,
                    cvv: req.body.cardCvv
                }
                const cvvStrng = inputCard.cvv.toString()

                if(cvvStrng.length !== 3){
                    throw new Error("Código CVV deve conter 3 números")
                }

                if(!inputCard.holderName || !inputCard.number || !inputCard.expirationDate || !inputCard.cvv){
                    throw new Error("Para type igual a 'CREDIT CARD' os campos 'cardHolderName', 'cardNumber', 'cardExpirationDate' e 'cardCvv' são obrigatórios")
                }

                card = new Card(inputCard.holderName, inputCard.number, inputCard.expirationDate, inputCard.cvv)

                inputPayment = {
                    amount,
                    type,
                    card
                }
            }else{
                throw new Error("O campo paymentType deve ser preenchido com 'BOLETO' ou 'CREDIT CARD'")
            }

            const buyer = new Buyer(inputBuyer.name, inputBuyer.email, inputBuyer.cpf)

            const payment = new PaymentBusiness()
            const result = await payment.createPayment(clientId, buyer, inputPayment)

            res.status(200).send(result)

        }catch(error: any){
            res.status(400).send("Unexpected Error")
        }
    }
}