import { Character } from "../src/models/Character"
import { validateCharacter } from "../src/validateCharacter"

describe("Testando 'validateCharacter'", () => {
    test("Verifica quando o nome do personagem esta vazio", ()=> {
        const result = validateCharacter({
            name: "",
            life: 1500,
            defence: 500,
            strength: 400
        })

        expect(result).toBe(false)
    })

    test("Verifica vida do personagem igual a 0", () => {
        const result = validateCharacter({
            name: "Meg",
            life: 0,
            defence: 500,
            strength: 400
        })

        expect(result).toBe(false)
    })

    test("Verifica força do personagem igual a 0", () => {
        const result = validateCharacter({
            name: "Meg",
            life: 1500,
            defence: 500,
            strength: 0
        })

        expect(result).toBe(false)
    })

    test("Verifica defesa do personagem igual a 0", () => {
        const result = validateCharacter({
            name: "Meg",
            life: 1500,
            defence: 0,
            strength: 400
        })

        expect(result).toBe(false)
    })

    test("Verifica defesa com valor negativo", () => {
        const result = validateCharacter({
            name: "Meg",
            life: 1500,
            defence: -10,
            strength: 400
        })

        expect(result).toBe(false)
    })

    test("Verifica todas as informações válidas", () => {
        const result = validateCharacter({
            name: "Meg",
            life: 1500,
            defence: 500,
            strength: 400
        })

        expect(result).toBe(true)
    })
})