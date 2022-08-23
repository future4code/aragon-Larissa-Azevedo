import { Router } from 'express';
import { ProductBusiness } from '../business/ProductBusiness';
import { ProductController } from '../controller/ProductController';
import { ProductDatabase } from '../database/ProductDatabase';
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';

export const productRouter = Router()

const productController = new ProductController(
    new ProductBusiness(
        new ProductDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)

productRouter.post("/add", productController.addProduct)
productRouter.get("/", productController.getProducts)