import { Request, Response } from "express";
import { RecipeDatabase } from "../database/RecipeDatabase";
import { Recipe } from "../models/Recipe";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { format } from 'date-fns';
import { USER_ROLES } from "../models/User";
import { BaseDatabase } from "../database/BaseDatabase";

export class RecipeController {

    public createRecipe = async (req:Request, res:Response) => {
        let errorCode = 400

        try {
            const token = req.headers.authorization

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
                throw new Error("Erro: Confira seu token!")
            }

            const idGenerator = new IdGenerator()
            const id = idGenerator.generate()

            const currentDay = new Date(Date.now())

            const createdAt = currentDay

            const updatedAt = currentDay
            
            const creatorId = payload.id

            const recipe = new Recipe(
                id,
                title,
                description,
                createdAt,
                updatedAt,
                creatorId
            )
            const recipeDatabase = new RecipeDatabase()
            await recipeDatabase.createRecipe(recipe)

            res.status(201).send({message: "Receita criada com sucesso!"})           


        } catch (error) {
            res.status(errorCode).send({ message: error.message })

        }
    }

    public editRecipe = async (req:Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const recipeId = req.body.recipeId
            const title = req.body.title
            const description = req.body.description
            const updatedAt = new Date (Date.now())

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
                throw new Error("Erro: Confira seu token.")
            }

            const recipeDatabase = new RecipeDatabase()

            const recipeDB = await recipeDatabase.findById(recipeId)

            if(!recipeDB){
                errorCode = 404
                throw new Error("Erro: Receita não encontrada.");
            }

            const creatorId = recipeDB.creator_id

            if(payload.role === USER_ROLES.NORMAL){
                if(payload.id !== creatorId){
                    errorCode = 403
                    throw new Error("Erro: apenas Admins podem alterar receitas de outros usuários.");                    
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
            updatedAt && recipe.setUpdatedAt(updatedAt)
            

            await recipeDatabase.editRecipe(recipe)

            res.status(201).send({ message: "Receita editada com sucesso", recipe})
            
        } catch (error) {
            res.status(errorCode).send({ message: error.message })

        }
    }

    public deleteRecipe = async(req:Request, res: Response) => {
        let errorCode = 400 
        try {
            const token = req.headers.authorization
            const recipeId = req.params.recipeId

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Erro: Confira seu token.")
            }


            const recipeDatabase = new RecipeDatabase()
            const recipeDB = await recipeDatabase.findById(recipeId)

            if(!recipeDB){
                errorCode = 404
                throw new Error("Erro: Receita não encontrada.");
            }

            const creatorId = recipeDB.creator_id

            if(payload.role === USER_ROLES.NORMAL){
                if(payload.id !== creatorId){
                    errorCode = 403
                    throw new Error("Erro: apenas Admins podem deletar receitas de outros usuários.");                    
                }
            }
            
            await recipeDatabase.deleteRecipe(recipeId)
            res.status(200).send({message: "Receita deletada com sucesso!"})
            
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }


    public getAllRecipes = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const name = req.query.name as string
            const sort = req.query.sort as string || "updated_at"
            const order = req.query.order as string || "asc"
            const limit = Number(req.query.limit) || 10
            const page = Number(req.query.page) || 1
            const offset = limit * (page - 1)

           
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
                const result = await recipeDatabase.getAllRecipes(name, sort, order,limit, offset)
                return res.status(200).send({ "Receita(s) encontrada(s)!": result })
            }

            const recipeDatabase = new RecipeDatabase()

            const recipesDB = await recipeDatabase.getAllRecipes(name, sort, order,limit, offset)

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