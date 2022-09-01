export interface IProductDB {
    id: number,
    name:string,
}

export interface ITagsDB{
    id: number,
    name:string
}

export interface ITagsProductsDB{
    id: number,
    product_id:number,
    tag_id:number
}

export class Product{
    constructor(
        private id: number,
        private name: string,
        private tags: string[] = []

    ){}

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }


    public getTags = () => {
        return this.tags
    }


    public setId = (newId:number) => {
        this.id = newId
    }

    public setName = (newName:string) => {
        this.name = newName
    }

    public setTags = (newTag: string[]) => {
        this.tags = newTag
    }

}

export interface IAddProductInputDTO {
    token: string
    id: number,
    name: string,
}

export interface IAddProductOutputDTO{
    message:string
}

export interface IGetProductsByNameInputDTO{
   search:string
}

export interface IGetProductsByIdInputDTO{
    search:number
 }

 export interface IGetProductsByTagInputDTO{
    search:string
 }
 

export interface IGetProductsOutputDTO{
    products: Product[]
}
