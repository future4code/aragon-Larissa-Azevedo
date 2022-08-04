import { request } from "express";
import { IRecipeDB, Recipe } from "../models/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
    public static TABLE_RECIPES = "Cookenu_Recipes"

    public createRecipe = async (recipe: Recipe) => {
        const recipeDB:IRecipeDB = {
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            created_at: recipe.getCreatedAt(),
            updated_at: recipe.getUpdatedAt(),
            creator_id: recipe.getCreatorId()
        }

        await BaseDatabase.connection(RecipeDatabase.TABLE_RECIPES)
        .insert(recipeDB)
    }

    public findById = async (id: string) => {
        const result: IRecipeDB[] = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .select()
            .where({ id })
        
        return result[0]
    }

    public editRecipe = async (recipe: Recipe) => {
        const recipeDB: IRecipeDB = {
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            created_at: recipe.getCreatedAt(),
            updated_at: recipe.getUpdatedAt(),
            creator_id: recipe.getCreatorId()
        }

        await BaseDatabase.connection(RecipeDatabase.TABLE_RECIPES)
        .update(recipeDB)
        .where({id: recipeDB.id})
    }

    public deleteRecipe = async (recipeId: string) => {
        const result = await BaseDatabase.connection(RecipeDatabase.TABLE_RECIPES)
        .delete()
        .where({id: recipeId})

        return result
    }


    public getAllRecipes = async (name: string, sort: string, order: string, limit: number, offset:number) => {

        if(name){
        const result:IRecipeDB[] = await BaseDatabase.connection(RecipeDatabase.TABLE_RECIPES)
        .select()
        .where("title", "LIKE", `%${name}%`)
        .orderBy(sort, order)
        .limit(limit)
        .offset(offset)

        return result;

        } else {
            const result: IRecipeDB[] = await BaseDatabase.connection(RecipeDatabase.TABLE_RECIPES)
            .select()
            .orderBy(sort, order)
            .limit(limit)
            .offset(offset)
        
        return result
        }
        
        
    }
}