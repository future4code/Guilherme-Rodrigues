import { User } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase{
    private tableName: string = "USERS_E";

    createUser = async (user: User) => {
        await this.connection(this.tableName).insert(user)
    }

    getAllUsers = async (): Promise <any> => {
        const result = await this.connection(this.tableName).select("*")
        return result
    }
}