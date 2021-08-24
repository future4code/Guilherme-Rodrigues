import { Personagem } from "../model/personagem";

export const validateCharacter = (input: Personagem): boolean => {
	if ( !input.nome || input.hp === undefined || input.def === undefined || input.str === undefined ) {
	  return false;
	}
  
	if (input.hp <=0 || input.str <=0 || input.def <=0) {
	  return false;
	}
  
	return true;
  };