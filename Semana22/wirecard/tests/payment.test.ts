const request = require("supertest")
const app = require("../src/server")

describe("Test payment with boleto",() => {

    it("Error when clientId field is empty", async() => {
        expect.assertions(2)

        const res = await request(app)
        .post("/payment/create-payment")
        .send({
            clientId: "",
            buyerName: "Izabella",
            buyerEmail: "izabella@gmail.com",
            buyerCpf: "111.111.111-11",
            paymentAmount: 20,
            paymentType: "boleto"
        })

        expect(res.statusCode).toEqual(400)
        expect(res.text).toBe("Os parâmetros clienteId, buyerName, buyerEmail, buyerCpf, paymentAmount e paymentType são obrigatórios")
    })

    it("Error when paymentType is diferent of 'boleto' or 'credit card'", async() => {
        expect.assertions(2)

        const res = await request(app)
        .post("/payment/create-payment")
        .send({
            clientId: "1",
            buyerName: "Izabella",
            buyerEmail: "izabella@gmail.com",
            buyerCpf: "111.111.111-11",
            paymentAmount: 20,
            paymentType: "pix"
        })

        expect(res.statusCode).toEqual(400)
        expect(res.text).toBe("O campo paymentType deve ser preenchido com 'BOLETO' ou 'CREDIT CARD'")
    })

    it("error when typeof clientId is diferent of string", async() => {
        expect.assertions(2)

        const res = await request(app)
        .post("/payment/create-payment")
        .send({
            clientId: "1",
            buyerName: "Izabella",
            buyerEmail: "izabella@gmail.com",
            buyerCpf: "111.111.111-11",
            paymentAmount: 20,
            paymentType: "credit card",
            cardHolderName: "Izabella c",
            cardNumber: "6550017000704101",
            cardExpirationDate: "21/08/2022",
            cardCvv: 123
        })

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty("message")
    })

    it("payment with boleto success", async() => {
        expect.assertions(2)

        const res = await request(app)
        .post("/payment/create-payment")
        .send({
            clientId: "1",
            buyerName: "Izabella",
            buyerEmail: "izabella@gmail.com",
            buyerCpf: "111.111.111-11",
            paymentAmount: 20,
            paymentType: "boleto"
        })

        console.log(res.text)

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty("boletoNumber")
    })
})

describe("Test oayment with credit card", () => {
    it("when paymentType is chosen credit cards, but no credit card details are filled in", async() => {
        expect.assertions(2)

        const res = await request(app)
        .post("/payment/create-payment")
        .send({
            clientId: "1",
            buyerName: "Izabella",
            buyerEmail: "izabella@gmail.com",
            buyerCpf: "111.111.111-11",
            paymentAmount: 20,
            paymentType: "credit card"
        })

        expect(res.statusCode).toEqual(400)
        expect(res.text).toBe("Para type igual a 'CREDIT CARD' os campos 'cardHolderName', 'cardNumber', 'cardExpirationDate' e 'cardCvv' são obrigatórios")
    })

    it("error when credit card is invalid", async() => {
        expect.assertions(2)

        const res = await request(app)
        .post("/payment/create-payment")
        .send({
            clientId: "1",
            buyerName: "Izabella",
            buyerEmail: "izabella@gmail.com",
            buyerCpf: "111.111.111-11",
            paymentAmount: 20,
            paymentType: "credit card",
            cardHolderName: "Izabella c",
            cardNumber: "6550017000704104",
            cardExpirationDate: "21/08/2022",
            cardCvv: 123
        })

        expect(res.statusCode).toEqual(400)
        expect(res.text).toBe("Número de cartão inválido")
    })

    it("error when cvv digit number is less than 3", async() => {
        expect.assertions(2)

        const res = await request(app)
        .post("/payment/create-payment")
        .send({
            clientId: "1",
            buyerName: "Izabella",
            buyerEmail: "izabella@gmail.com",
            buyerCpf: "111.111.111-11",
            paymentAmount: 20,
            paymentType: "credit card",
            cardHolderName: "Izabella c",
            cardNumber: "6550017000704101",
            cardExpirationDate: "21/08/2022",
            cardCvv: 12
        })

        expect(res.statusCode).toEqual(400)
        expect(res.text).toBe("Código CVV deve conter 3 números")
    })

    it("error when expiration date is less than current date", async() => {
        expect.assertions(2)

        const res = await request(app)
        .post("/payment/create-payment")
        .send({
            clientId: "1",
            buyerName: "Izabella",
            buyerEmail: "izabella@gmail.com",
            buyerCpf: "111.111.111-11",
            paymentAmount: 20,
            paymentType: "credit card",
            cardHolderName: "Izabella c",
            cardNumber: "6550017000704101",
            cardExpirationDate: "21/08/2021",
            cardCvv: 123
        })

        expect(res.statusCode).toEqual(400)
        expect(res.text).toBe("Cartão vencido")
    })

    it("success when all data is correct", async() => {
        expect.assertions(2)

        const res = await request(app)
        .post("/payment/create-payment")
        .send({
            clientId: "1",
            buyerName: "Izabella",
            buyerEmail: "izabella@gmail.com",
            buyerCpf: "111.111.111-11",
            paymentAmount: 20,
            paymentType: "credit card",
            cardHolderName: "Izabella c",
            cardNumber: "6550017000704101",
            cardExpirationDate: "21/08/2022",
            cardCvv: 123
        })

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty("message")
    })
})