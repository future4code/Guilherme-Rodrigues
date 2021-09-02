import { performPurchase } from "../src/ex1/purchase"
import { User } from "../src/model/user"

describe("Testando função compra", () => {

    test("Saldo maior que a compra", () => {

        const user: User ={
            name: "joao",
            balance: 500
        }

        const result = performPurchase(user, 40)
        expect(result).toEqual({
            name: "joao",
            balance: 460
        })
        console.log(result)
    })

    test("Saldo igual que a compra", () => {

        const user: User ={
            name: "joao",
            balance: 500
        }

        const result = performPurchase(user, 500)
        expect(result).toEqual({
            name: "joao",
            balance: 0
        })
        console.log(result)
    })

    test("Saldo maior que a compra", () => {

        const user: User ={
            name: "joao",
            balance: 500
        }

        const result = performPurchase(user, 600)
        expect(result).toBeUndefined()
    })

})