import { Tickets } from "../model/ticket"
import { BaseDatabase } from "./BaseDatabase";


export class TicketDatabase extends BaseDatabase{
    private tableProducts: string = "PRODUCTS_E";
    private tableTickets: string = "TICKETS_E";

    createTicket= async (ticket: Tickets) => {
        const product = {
            name: ticket.name,
            description: ticket.description,
            price: ticket.price,
            TICKET_id: Number(ticket.id)
        }

        const newTicket = {
            id: Number(ticket.id),
            origin: ticket.origin,
            destiny: ticket.destiny
        }

        await this.connection(this.tableTickets).insert(newTicket)
        await this.connection(this.tableProducts).insert(product)
        
    }

    getAllTickets = async (): Promise <any> => {
        const result = await this.connection.raw(`
            SELECT * FROM PRODUCTS_E
            WHERE TICKET_id IS NOT NULL
        `)
        return result[0]
    }
}
