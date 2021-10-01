import { Buyer } from "../model/Buyer";
import { payment, TYPE } from "../model/payment";

export class PaymentBusiness{

    async createPayment(clienteId: string, buyer: Buyer, payment: payment){
        console.log(payment)
        if(payment.type === TYPE.BOLETO){
            const amountString = payment.amount.toString()
            const field8Complement = Math.floor(100000000000 + Math.random() * 900000000000)
            const sizeAmount = amountString.length

            const boletoData = {
                field1: Math.floor(10000 + Math.random() * 90000),
                field2: Math.floor(10000 + Math.random() * 90000),
                field3: Math.floor(10000 + Math.random() * 900000),
                field4: Math.floor(100000 + Math.random() * 900000),
                field5: Math.floor(10000 + Math.random() * 900000),
                field6: Math.floor(100000 + Math.random() * 900000),
                field7: Math.floor(1 + Math.random() * 9),
                field8: (`${field8Complement}` + payment.amount*100).slice(sizeAmount),
            }
            
            const boletoNumber = `${boletoData.field1}.${boletoData.field2} ${boletoData.field3}.${boletoData.field4} ${boletoData.field5}.${boletoData.field6} ${boletoData.field7} ${boletoData.field8}`

            return {boletoNumber: boletoNumber}
        }else{
            return {message: "Cartão de crédito validado com sucesso"}
        }
    }
}