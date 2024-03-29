import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseError } from "../errors/BaseError";
import { RequestError } from "../errors/RequestError";
import { ICreateShowInputDTO, IRemoveReservationInputDTO, ITicketReservationInputDTO } from "../models/Show";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}

    public createShow = async (req:Request, res:Response) => {
        try {
            const input:ICreateShowInputDTO = {
                token:req.headers.authorization,
                band:req.body.band,
                starts_at: req.body.starts_at
            }

            const response = await this.showBusiness.createShow(input)
            res.status(201).send(response)
            
        } catch (error:unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao criar show!" })
        }
    }

    public getShows = async (req:Request, res: Response) => {
        try {
            const response = await this.showBusiness.getShows()
            res.status(200).send(response)
            
        } catch (error:unknown) {
            if( error instanceof BaseError){
                return res.status(error.statusCode).send({message: error.message})
            }

            res.status(500).send({message: "Erro inesperado ao buscar shows"})
        }
    }

    public ticketReservation = async (req:Request, res:Response) => {
        try {
            const input:ITicketReservationInputDTO = {
                token: req.headers.authorization,
                show_id: req.params.show_id
            }

            const response = await this.showBusiness.ticketReservation(input)
            res.status(200).send(response)
            
        } catch (error:unknown) {
            if( error instanceof BaseError){
                return res.status(error.statusCode).send({message: error.message})
            }

            res.status(500).send({message: "Erro inesperado ao buscar shows"})
            
        }
    }

    public removeReservation = async (req:Request, res:Response) => {
        try {
            const input:IRemoveReservationInputDTO = {
                token: req.headers.authorization,
                show_id: req.params.show_id
            }

            const response = await this.showBusiness.removeReservation(input)
            res.status(200).send(response)
            
        } catch (error:unknown) {
            if( error instanceof BaseError){
                return res.status(error.statusCode).send({message: error.message})
            }

            res.status(500).send({message: "Erro inesperado ao buscar ingressos!"})
        }
    }

}