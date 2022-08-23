import {BaseDatabase} from "../database/BaseDatabase";
import {IProductDB, Product} from "../models/Products"

export class ProductDatabase extends BaseDatabase{
    public static TABLE_PRODUCTS = "Products_Amaro"
    public static TABLE_TAGS = "Tags_Amaro"
    public static TABLE_TAGS_PRODUCTS = "Tags_Products_Amaro"

    public addProduct =async (input:Product) => {
        const productDB:IProductDB ={
            id:input.getId(),
            name:input.getName()
        }

        await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .insert(productDB)
    }

    public getProducts = async () => {
        const productsDB:IProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()

        return productsDB
    }

    public getTags = async (id: number) => {

        const [result] = await BaseDatabase.connection.raw(`
        SELECT Tags_Amaro.name
        FROM Tags_Products_Amaro
        JOIN Tags_Amaro
        ON Tags_Products_Amaro.tag_id = Tags_Amaro.id
        WHERE Tags_Products_Amaro.product_id = ${id};`)

        return result
        
    }
        
    }
