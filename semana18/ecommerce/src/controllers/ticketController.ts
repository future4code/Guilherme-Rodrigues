import { Request, Response } from "express"
import { TicketDatabase } from "../data/TicketDatabase"
import { Tickets } from "../model/ticket"
import { checkTicket } from "../services/Validatior"

export const getTickets = async (req: Request, res: Response) => {
    try{
        const ticketControll = new TicketDatabase()
        const result = await ticketControll.getAllTickets()

        res.status(200).send(result)
    }
    catch (error){
        res.status(404).send(error.message || error.sqlMessage)
    }
}

export const createNewTicket= async (req: Request, res: Response) => {
    try{
        const id = (Math.round(Math.random()*100))
        const body: Tickets = {
            id: id,
            name: req.body.name as string,
            description: req.body.description as string,
            price: req.body.price as number,
            origin: req.body.origin as string,
            destiny: req.body.destiny as string
        }

        const verifyInputs = checkTicket(body)

        if(verifyInputs){
            const newTicket = new Tickets(body.id, body.name, body.description, body.price, body.origin, body.destiny)
            new TicketDatabase().createTicket(newTicket)
        
            res.status(200).send({message:"Nova viagem criada", body})
        }

    }
    catch (error){
        res.status(404).send(error.message || error.sqlMessage)
    }
}
