import { Router } from 'express'
import { RecipeController } from '../controller/RecipeController'

export const recipeRouter = Router()

const recipeController = new RecipeController()

recipeRouter.get("/", recipeController.getAllRecipes)
// recipeRouter.post("/recipes", recipeController.createRecipe)
recipeRouter.put("/recipes", recipeController.editRecipe)