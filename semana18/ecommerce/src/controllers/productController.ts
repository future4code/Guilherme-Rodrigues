import { Request, Response } from "express"
import { ProductDatabase } from "../data/ProductDatabase"
import { Product } from "../model/product"
import { checkProduct } from "../services/Validatior"

export const getProducts = async (req: Request, res: Response) => {
    try{
        const productControll = new ProductDatabase()
        const result = await productControll.getAllProducts()

        res.status(200).send(result)
    }
    catch (error){
        res.status(404).send(error.message || error.sqlMessage)
    }
}

export const createNewProduct = async (req: Request, res: Response) => {
    try{
        const id = (Math.round(Math.random()*100))
        const body: Product = {
            id: id,
            name: req.body.name as string,
            description: req.body.description as string,
            price: req.body.price as number
        }

        const verifyInputs = checkProduct(body)

        if(verifyInputs){
            const newProduct = new Product(body.id, body.name, body.description, body.price)
            new ProductDatabase().createProduct(newProduct)
        
            res.status(200).send({message:"Novo usuario criado", body})
        }

    }
    catch (error){
        res.status(404).send(error.message || error.sqlMessage)
    }
}
