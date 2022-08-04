import { Router } from 'express'
import { RecipeController } from '../controller/RecipeController'

export const recipeRouter = Router()

const recipeController = new RecipeController()

recipeRouter.get("/", recipeController.getAllRecipes)
recipeRouter.post("/create", recipeController.createRecipe)
recipeRouter.put("/edit", recipeController.editRecipe)
recipeRouter.delete("/:recipeId", recipeController.deleteRecipe)