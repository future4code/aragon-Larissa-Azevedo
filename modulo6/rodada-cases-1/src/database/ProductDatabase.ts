import {BaseDatabase} from "../database/BaseDatabase";
import { IProductDB, ITagsDB, Product} from "../models/Products"

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

    public getProductById = async (id: number) => {
        const productsDB:IProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()
        .where({id:id})

        return productsDB[0]
        
    }

    public getProducts = async () => {
        const productsDB:IProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()

        return productsDB
    }

    public getProductSearchById = async (search: number) => {
        const result = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()
        .where("id", "LIKE", `%${search}%`)

        return result
    }

     public getProductSearchByName = async (search:string) => {
        const result = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()
        .where("name", "LIKE", `%${search}%`)

        return result
    }

    public getTagById = async (search:string) =>{
        const tagsDB:ITagsDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_TAGS)
        .select()
        .where("name","LIKE", `%${search}%`)

        return tagsDB

    }

    public getProductSearchByTag = async (search:string | number) => {

        const result = await BaseDatabase.connection.raw(`
        SELECT Products_Amaro.id, Products_Amaro.name
        FROM Tags_Products_Amaro
        JOIN Tags_Amaro
        ON Tags_Products_Amaro.tag_id = Tags_Amaro.id
        JOIN Products_Amaro
        ON Tags_Products_Amaro.product_id = Products_Amaro.id
        WHERE Tags_Products_Amaro.tag_id LIKE "%${search}%"
        `)

        return result[0]   
    }


    public getTags = async (id: string | number) => {

        const [result] = await BaseDatabase.connection.raw(`
        SELECT Tags_Amaro.name
        FROM Tags_Products_Amaro
        JOIN Tags_Amaro
        ON Tags_Products_Amaro.tag_id = Tags_Amaro.id
        WHERE Tags_Products_Amaro.product_id = ${id};`)

        return result
        
    }


        
    }
