import {BaseDatabase} from "../database/BaseDatabase";

export class ProductDatabase extends BaseDatabase{
    public static TABLE_PRODUCTS = "Products_Amaro"
    public static TABLE_TAGS = "Tags_Amaro"
    public static TABLE_TAGS_PRODUCTS = "Tags_Products_Amaro"

}