import { User } from "../models/User"
import { performPurchase } from "../src/exercicio1"

describe("Testando exercicio 1", () => {
    test("Testando se o saldo é maior que o valor", () => {
        const user: User ={
            name: "Astrodev",
            balance: 100
        }

        const result = performPurchase(user, 40)

        expect(result).toEqual({
            name: "Astrodev",
            balance: 60
        })
    })

    test("Testando se saldo é maior que valor", () => {
        const user: User = {
            name: "Astrodev",
            balance: 50
        }

        const result = performPurchase(user,50)

        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })

    test("Testando se o saldo é maior que o valor", () => {
        const user: User = {
            name: "Astrodev",
            balance: 30
        }

        const result = performPurchase(user, 50)

        expect(result).not.toBeDefined()
    })
})