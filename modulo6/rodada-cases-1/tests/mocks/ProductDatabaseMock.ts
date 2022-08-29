import { BaseDatabase } from "../../src/database/BaseDatabase";
import { IProductDB, ITagsDB, Product } from "../../src/models/Products";

export class ProductDatabaseMock extends BaseDatabase {
    public static TABLE_PRODUCTS = "Products_Amaro"
    public static TABLE_TAGS = "Tags_Amaro"
    public static TABLE_TAGS_PRODUCTS = "Tags_Products_Amaro"

    public addProduct =async (input:Product) => {
     
    }

    public getProducts = async () => {
        const products:IProductDB[] = 
        [
             {
               id: 8371,
               name: "VESTIDO TRICOT CHEVRON"
             },
             {
               id: 8367,
               name: "VESTIDO MOLETOM COM CAPUZ MESCLA"
             },
             {
               id: 8363,
               name: "VESTIDO CURTO MANGA LONGA LUREX"
             },
             {
               id: 8360,
               name: "VESTIDO FEMININO CANELADO"
             },
             {
               id:8314,
               name:"VESTIDO PLISSADO ACINTURADO"
             }
           ]

           return products       
    }

    public getProductById = async (id:number) => {
        const product:IProductDB[] = 
        [
             {
               id: 8371,
               name: "VESTIDO TRICOT CHEVRON"
             }
        ]

        switch(id){
            case 8371:
                return product
            default:
                return undefined
        }
    }

    public getProductSearchById = async (search: number) => {
        const products:IProductDB[] = [
            {
              id: 8371,
              name: "VESTIDO TRICOT CHEVRON"
            },
            {
              id: 8367,
              name: "VESTIDO MOLETOM COM CAPUZ MESCLA"
            }
        ]

        switch(search){
            case 8371:
                return products
            default: undefined
        }

    }

    public getProductSearchByName = async (search: string) => {
        const products:IProductDB[] = [
            {
              id: 8371,
              name: "VESTIDO TRICOT CHEVRON"
            },
            {
              id: 8367,
              name: "VESTIDO MOLETOM COM CAPUZ MESCLA"
            }
        ]

        switch(search){
            case "tricot":
                return products
            default: undefined
        }
    }

    public getProductSearchByTag = async (search: number) => {
        const products:IProductDB[] = [
            {
              id: 8371,
              name: "VESTIDO TRICOT CHEVRON"
            },
            {
                id: 8363,
                name: "VESTIDO CURTO MANGA LONGA LUREX"
            }
        ]

        switch(search){
            case 103 :
                return products
            default: undefined
        }
    }

    public getTagById =async (search:string) => {
        const tag_test: ITagsDB[] = [
            {
                id: 103,
                name: "delicado"
            }
        ]

        const tag_test2: ITagsDB[] = [
            {
                id: 105,
                name: "casual"
            }
        ]

        switch(search){
            case "delicado":
                return tag_test
            case"casual":
                return tag_test2
        }
    }

    public getTags =async (id:number) => {
        const tags:ITagsDB[] = [
            {
                id: 101,
                name: "balada"
            },
            {
                id: 102,
                name: "neutro"
            },
            {
                id: 103,
                name: "delicado"
            }
        ]

        switch(id){
            case 8371:
                return tags

            default: undefined
        }

        
    }



}