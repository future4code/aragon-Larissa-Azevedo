import { Router } from 'express'
import { UserController } from '../controller/UserController'

export const userRouter = Router()

const userController = new UserController()


userRouter.get("/", userController.getAllUsers)
userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)
userRouter.delete("/:userId", userController.deleteUser)