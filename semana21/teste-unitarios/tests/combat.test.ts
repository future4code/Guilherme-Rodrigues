import { performAttack } from "../src/ex1/inversionCombat"
import { validatorMockFailure, validatorMockSuccess } from "../src/mock/validator"
import { Personagem } from "../src/model/personagem"

describe("Testando função de combate", () => {

    test("Combate valido", () => {
        
        const attacker: Personagem = ({
            nome:"dimitri",
            hp: 1500,
            def: 200,
            str: 600,
        })

        const defender: Personagem = ({
            nome:"kirov",
            hp: 1500,
            def: 400,
            str: 800,
        })

        performAttack(attacker, defender, validatorMockSuccess)

        expect(defender.hp).toEqual(1300)
        expect(validatorMockSuccess).toHaveBeenCalled();
        expect(validatorMockSuccess).toHaveBeenCalledTimes(2);
        expect(validatorMockSuccess).toHaveReturnedTimes(2);
    })

    test("Combate invalido", () => {
        
        const attacker: Personagem = ({
            nome:"dimitri",
            hp: 1500,
            def: 200,
            str: 600,
        })

        const defender: Personagem = ({
            nome:"",
            hp: 1500,
            def: 400,
            str: 800,
        })

        try{
            performAttack(attacker, defender, validatorMockFailure)
        }
        catch(err){

            expect(err.message).toEqual("Invalid character")
            expect(validatorMockSuccess).toHaveBeenCalled();
            expect(validatorMockSuccess).toHaveBeenCalledTimes(2);
            expect(validatorMockSuccess).toHaveReturnedTimes(2);
        }

    })

    test("Combate com morte", () => {
        
        const attacker: Personagem = ({
            nome:"dimitri",
            hp: 1500,
            def: 200,
            str: 1500,
        })

        const defender: Personagem = ({
            nome:"Kojo",
            hp: 300,
            def: 100,
            str: 800,
        })

            performAttack(attacker, defender, validatorMockSuccess)

            expect(defender.hp).toBeLessThan(0)
            expect(validatorMockSuccess).toHaveBeenCalled();
            expect(validatorMockSuccess).toHaveBeenCalledTimes(4);
            expect(validatorMockSuccess).toHaveReturnedTimes(4);
        

    })
})