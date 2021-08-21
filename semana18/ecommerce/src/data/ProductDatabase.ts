import { Product } from "../model/product";
import { BaseDatabase } from "./BaseDatabase";


export class ProductDatabase extends BaseDatabase{
    private tableName: string = "PRODUCTS_E";

    createProduct= async (product: Product) => {
        await this.connection(this.tableName).insert(product)
    }

    getAllProducts = async (): Promise <any> => {
        const result = await this.connection(this.tableName).select("*")
        return result
    }
}