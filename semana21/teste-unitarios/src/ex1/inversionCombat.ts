import { Personagem } from "../model/personagem";

export const performAttack = (
    attacker: Personagem,
    defender: Personagem,
    validator: (input: Personagem) => boolean
  ) => {
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.str > defender.def) {
      defender.hp -= attacker.str - defender.def;
    }
  };