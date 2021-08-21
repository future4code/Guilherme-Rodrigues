export class Product {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number
    ) {}
}

export interface ProductRegistration {
    name: string,
    description: string,
    price: number
};