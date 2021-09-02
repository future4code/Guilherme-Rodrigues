import { Personagem } from "../model/personagem";
import { validateCharacter } from "./validateCharacter";

export const combat = (attacker: Personagem, defender: Personagem) => {
	if ( !validateCharacter(attacker) || !validateCharacter(defender) ) {
        throw new Error("Invalid character");
	}
  
	if (attacker.str > defender.str) {
	  defender.hp -= attacker.str - defender.def
	}
  };

  