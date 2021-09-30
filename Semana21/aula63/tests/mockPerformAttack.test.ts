import { Character } from "../src/models/Character"
import { performAttack } from "../src/performAttack"

describe("veridicando attack com mock", () => {
    test("validando ataque", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: "Meg",
            life: 1500,
            defence: 500,
            strength: 400
        }

        const defender: Character = {
            name: "Liza",
            life: 1700,
            defence: 300,
            strength: 350
        }

        performAttack(attacker, defender, validatorMock)

        expect(defender.life).toEqual(1600)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })

    test("retornando caracter invalido", () => {
        expect.assertions(4)
        const validatormock = jest.fn(() => {
            return false
        })

        const attacker: Character = {
            name: "",
            life: 1500,
            defence: 500,
            strength: 400
        }

        const defender: Character = {
            name: "Liza",
            life: 1700,
            defence: 300,
            strength: 350
        }

        try{
            performAttack(attacker, defender, validatormock)
        }catch(error){
            expect(error.message).toBe("Personagem Inválido")
            expect(validatormock).toHaveBeenCalled()
            expect(validatormock).toHaveBeenCalledTimes(1)
            expect(validatormock).toHaveReturnedTimes(1)
        }

        

    })
})