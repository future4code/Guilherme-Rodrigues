export class User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public age: number
    ) {}
};

export interface UserRegistration {
    name: string,
    email: string,
    age: number
};