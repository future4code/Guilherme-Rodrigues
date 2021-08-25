import { validateCharacter } from "../src/ex1/validateCharacter"

describe("Testando função de personagens", () => {

    test("Personagem sem nome", () => {

        const result = validateCharacter({
            nome:"",
            hp:500,
            def: 100,
            str:40,
        })

        expect(result).toBe(false)
    })

    test("Personagem sem vida", () => {

        const result = validateCharacter({
            nome:"Joao",
            hp:0,
            def: 100,
            str:40,
        })

        expect(result).toBe(false)
    })

    test("Personagem sem força", () => {

        const result = validateCharacter({
            nome:"Joao",
            hp:500,
            def: 100,
            str:0,
        })

        expect(result).toBe(false)
    })

    test("Personagem sem defesa", () => {

        const result = validateCharacter({
            nome:"Joao",
            hp:500,
            def: 0,
            str:40,
        })

        expect(result).toBe(false)
    })

    test("Personagem com valores negativos", () => {

        const result = validateCharacter({
            nome:"Joao",
            hp:500,
            def: -100,
            str:40,
        })

        expect(result).toBe(false)
    })

    test("Personagem valido", () => {

        const result = validateCharacter({
            nome:"Joao",
            hp:500,
            def: 100,
            str:40,
        })

        expect(result).toBe(true)
    })
})