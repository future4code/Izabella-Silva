import { Character } from "./models/Character";


export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: any) => boolean
    ) => {
        if(!validator(attacker) || !validator(defender)){
            throw new Error("Personagem Inválido")
        }

        if(attacker.strength > defender.defence){
            defender.life = defender.life-(attacker.strength - defender.defence)
        }
    }