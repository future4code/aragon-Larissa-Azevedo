import { Router } from 'express';
import { ProductBusiness } from '../business/ProductBusiness';
import { ProductController } from '../controller/ProductController';
import { ProductDatabase } from '../database/ProductDatabase';
import { Authenticator } from '../services/Authenticator';

export const productRouter = Router()

const productController = new ProductController(
    new ProductBusiness(
        new ProductDatabase(),
        new Authenticator()
    )
)

productRouter.post("/add", productController.addProduct)
productRouter.get("/", productController.getProducts)
productRouter.get("/searchId/:product_id", productController.getProductSearchById)
productRouter.get("/searchName", productController.getProductSearchByName)
productRouter.get("/byTag", productController.getProductSearchByTag)