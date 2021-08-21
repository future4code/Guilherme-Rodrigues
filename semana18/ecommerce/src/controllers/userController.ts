import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { User } from "../model/user"
import { checkUser } from "../services/Validatior"

export const getUsers = async (req: Request, res: Response) => {
    try{
        const userControll = new UserDatabase()
        const result = await userControll.getAllUsers()

        res.status(200).send(result)
    }
    catch (error){
        res.status(404).send(error.message || error.sqlMessage)
    }
}

export const createNewUser = async (req: Request, res: Response) => {
    try{
        const id = (Math.round(Math.random()*100)).toString()
        const body: User = {
            id: id,
            name: req.body.name as string,
            email: req.body.email as string,
            age: req.body.age as number
        }

        const verifyInputs = checkUser(body)

        if(verifyInputs){
            const newUser = new User(body.id, body.name, body.email, body.age)
            new UserDatabase().createUser(newUser)
        
            res.status(200).send({message:"Novo produto criado", body})
        }

    }
    catch (error){
        res.status(404).send(error.message || error.sqlMessage)
    }
}
