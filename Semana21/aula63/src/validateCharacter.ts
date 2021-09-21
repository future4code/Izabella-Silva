import { Character } from "./models/Character";

export const validateCharacter = (input: Character): boolean => {
    if(
        !input.name ||
        input.life === undefined ||
        input.defence === undefined ||
        input.strength === undefined
    ){
        return false
    }

    if(
        input.life <= 0 ||
        input.strength <= 0 ||
        input.defence <= 0
    ){
        return false
    }

    return true
}