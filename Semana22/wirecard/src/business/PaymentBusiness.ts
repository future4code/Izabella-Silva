import { Buyer } from "../model/Buyer";
import { payment, TYPE } from "../model/payment";

export class PaymentBusiness{

    async createPayment(payment: payment): Promise<any>{
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
            const date = payment.card && payment.card.getExpirationDate()
            const validateDate = await this.toValidateDate(date as string)

            if(!validateDate){
                throw new Error("Cartão vencido")
            }
            
            return {message: "Cartão de crédito validado com sucesso"}
        }
    }

    async validate_creditcardnumber(inputNum: number) {       
        var digit, digits, flag, sum, _i, _len;
        flag = true;
        sum = 0;
        digits = (inputNum + '').split('').reverse();        
        for (_i = 0, _len = digits.length; _i < _len; _i++) {       
          digit = digits[_i];      
          digit = parseInt(digit, 10);          
          if ((flag = !flag)) {                      
            digit *= 2;               
          }
          if (digit > 9) {               
            digit -= 9;                    
          }      
          sum += digit;          
        }    
        return sum % 10 === 0;
    };

    async toValidateDate(date: string): Promise<boolean>{
        const newDate = new Date(date.split("/").reverse().join("/"))
        const dateInMilliseconds = newDate.getTime()
        const dateNow = Date.now()

        const difDates = dateInMilliseconds - dateNow

        const validateDate = difDates < 0 ? false : true

        return validateDate
    }
}