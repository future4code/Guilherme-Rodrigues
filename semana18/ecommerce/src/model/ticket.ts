import { Product } from "./product";

export class Tickets extends Product {
    constructor(
        id: number,
        name: string,
        description: string,
        price: number,
        public origin: string,
        public destiny: string
    ) {
        super(id, name, description, price)
        this.origin = origin
        this.destiny = destiny
    }
}

export interface TicketsRegistration {
    name: string,
    description: string,
    price: number,
    origin: string,
    destiny: string
};