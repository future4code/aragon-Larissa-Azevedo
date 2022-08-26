import { BaseDatabase } from "../../src/database/BaseDatabase";
import { Product } from "../../src/models/Products";

export class ProductDatabaseMock extends BaseDatabase {
    public static TABLE_PRODUCTS = "Products_Amaro"
    public static TABLE_TAGS = "Tags_Amaro"
    public static TABLE_TAGS_PRODUCTS = "Tags_Products_Amaro"

    public addProduct =async (input:Product) => {
     
    }

}