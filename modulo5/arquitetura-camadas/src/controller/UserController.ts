import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"

export class UserController {
    public signup = async (req: Request, res: Response) => {
        try {
            const userBusiness = new UserBusiness()
            const response = await userBusiness.signup({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            
            res.status(201).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

}