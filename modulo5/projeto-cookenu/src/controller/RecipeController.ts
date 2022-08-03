import { Request, Response } from "express";
import { RecipeDatabase } from "../database/RecipeDatabase";
import { UserDatabase } from "../database/UserDatabase";
import { Recipe } from "../models/Recipe";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { format } from 'date-fns';
import { USER_ROLES } from "../models/User";

export class RecipeController {

    // public createRecipe = async (req:Request, res:Response) => {
    //     let errorCode = 400

    //     try {
    //         const token = req.headers.authorization

    //         const title = req.body.title
    //         const description = req.body.description

    //         const authenticator = new Authenticator()
    //         const payload = authenticator.getTokenPayload(token)

    //         if(!title && !description){
    //             throw new Error("Erro: Há campos em branco, por favor confira seus parâmetros.");
    //         }

    //         if (typeof title !== "string" || typeof description !== "string") {
    //             throw new Error("Erro: 'Title' e 'description' devem ser do tipo string")
    //         }

    //         if (title.length < 3) {
    //             throw new Error("Erro: 'title' deve possuir ao menos 3 caracteres")
    //         }

    //         if (description.length < 10) {
    //             throw new Error("Erro: 'description' deve possuir ao menos 10 caracteres")
    //         }

    //         if (!payload) {
    //             errorCode = 401
    //             throw new Error("Erro: Confira seu token!")
    //         }

    //         const idGenerator = new IdGenerator()
    //         const id = idGenerator.generate()

    //         const currentDay = new Date(Date.now())

    //         const createdAt = currentDay

    //         const updatedAt = currentDay

    //         const userDatabase = new UserDatabase()
    //         const creatorId = await userDatabase.getUserById(id)

    //         const recipe = new Recipe(
    //             id,
    //             title,
    //             description,
    //             createdAt,
    //             updatedAt,
    //             creatorId //ERRO!
    //         )
    //         const recipeDatabase = new RecipeDatabase()
    //         await recipeDatabase.createRecipe(recipe)

    //         res.status(201).send({message: "Receita criada com sucesso!"})           


    //     } catch (error) {
    //         res.status(errorCode).send({ message: error.message })

    //     }
    // }

    public editRecipe = async (req:Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const userId = req.params.userId
            const recipeId = req.body.id
            const title = req.body.title
            const description = req.body.description

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if(!title && !description){
                throw new Error("Erro: Há campos em branco, por favor confira seus parâmetros.");
            }

            if (typeof title !== "string" || typeof description !== "string") {
                throw new Error("Erro: 'Title' e 'description' devem ser do tipo string")
            }

            if (title.length < 3) {
                throw new Error("Erro: 'title' deve possuir ao menos 3 caracteres")
            }

            if (description.length < 10) {
                throw new Error("Erro: 'description' deve possuir ao menos 10 caracteres")
            }

            if (!payload) {
                errorCode = 401
                throw new Error("Erro: Há campos em branco, por favor confira seus parâmetros.")
            }

            const recipeDatabase = new RecipeDatabase()

            const recipeDB = await recipeDatabase.findById(recipeId)

            if(!recipeDB){
                errorCode = 404
                throw new Error("Erro: Receita não encontrada.");
            }

            if(payload.role === USER_ROLES.NORMAL){
                if(payload.id !== userId){
                    errorCode = 403
                    throw new Error("Erro: apenas Admins podem alterar outras receitas.");                    
                }
            }

            const recipe = new Recipe(
                recipeDB.id,
                recipeDB.title,
                recipeDB.description,
                recipeDB.created_at,
                recipeDB.updated_at,
                recipeDB.creator_id
            )

            title && recipe.setTitle(title)
            description && recipe.setDescription(description)

            await recipeDatabase.editRecipe(recipe)

            res.status(201).send({ message: "Receita editada com sucesso", recipe})
            
        } catch (error) {
            res.status(errorCode).send({ message: error.message })

        }
    }

    public getAllRecipes = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization

            const name = req.query.name as string
            const sort = req.query.sort || "updatedAt"
            const order = req.query.order || "asc"

            if (!token) {
                errorCode = 401
                throw new Error("Erro: Confira seu token!")
            }

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Erro: Token inválido! Confira seu token.")
            }

            if(name){
                const recipeDatabase = new RecipeDatabase()
                const result = await recipeDatabase.getRecipeByName(name)
                return res.status(200).send({ "Receita encontrada!": result })
            }

            const recipeDatabase = new RecipeDatabase()

            const recipesDB = await recipeDatabase.getAllRecipes()

            const recipes = recipesDB.map((recipeDB) => {
                return new Recipe(
                    recipeDB.id,
                    recipeDB.title,
                    recipeDB.description,
                    recipeDB.created_at,
                    recipeDB.updated_at,
                    recipeDB.creator_id
                )
            })

            res.status(200).send({ "Lista de receitas:": recipes })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }


}