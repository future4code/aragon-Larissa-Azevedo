import { Request, Response } from "express"
import { PingBusiness } from "../business/PingBusiness"

export class PingController {
    constructor(
        private pingBusiness: PingBusiness
    ) {}

    public ping = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const response = await this.pingBusiness.ping()
            
            res.status(200).send(response)
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}