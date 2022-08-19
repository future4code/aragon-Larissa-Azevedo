import { ShowDatabase } from "../database/ShowDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { ICreateShowInputDTO, ICreateShowOutputDTO, IGetShowsOutputDTO, IRemoveReservationInputDTO, IRemoveReservationOutputDTO, ITicketDB, ITicketReservationInputDTO, ITicketReservationOutputDTO, Show } from "../models/Show"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { USER_ROLES } from "../models/User"
import { NotFoundError } from "../errors/NotFoundError"
import { RequestError } from "../errors/RequestError"
import { BaseDatabase } from "../database/BaseDatabase"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public createShow = async (input:ICreateShowInputDTO) => {
        const {token, band, starts_at} = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Erro: Usuário não autenticado.")
        }

        if(payload.role === USER_ROLES.NORMAL){          
            throw new UnauthorizedError("Erro: Apenas usuários 'ADMIN' podem criar shows.");                         
        }

        if(new Date(starts_at) < new Date("2022-12-05")){
            throw new RequestError
            ("Erro: o show não pode ser criado em dia anterior ao início do festival!");           
        }

        if(new Date(starts_at) > new Date("2022-12-11")){
            throw new RequestError("Erro: o show não pode ser criado em dia posterior ao fim do festival!");            
        }       

        const checkAvaiableDate = await this.showDatabase.checkAvaiableDate(starts_at)

        if(checkAvaiableDate){
            throw new RequestError("Erro: já tem show agendado para esse dia!");
            
        }

        const id = this.idGenerator.generate()

        const newShow = new Show (
            id,
            band,
            new Date(starts_at)
        )

        await this.showDatabase.createShow(newShow)

        const response:ICreateShowOutputDTO = {
            message: "Show criado com sucesso!",
            show: newShow
        }

        return response
    }

    public getShows = async () => {
        const showsDB = await this.showDatabase.getShows()

        const shows = showsDB.map(showDB => {
            return new Show(
                showDB.id,
                showDB.band,
                showDB.starts_at
            )
        })

        for(let show of shows){
            const show_id = show.getId()
            const tickets:any = await this.showDatabase.getTickets(show_id)

            show.setTickets(show.getTickets() - tickets)
        }

        const response:IGetShowsOutputDTO = {
            shows
        }

        return response        
    }

    public ticketReservation = async (input:ITicketReservationInputDTO) => {
        const {token, show_id} = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Erro: Usuário não autenticado.")
        }

        const showDB = await this.showDatabase.checksIfShowExists(show_id)

        if(!showDB){
            throw new NotFoundError("Erro: Show não encontrado!");
        }

        const ticketAlreadyBought = await this.showDatabase.checksTicketAlreadyBought(show_id, payload.id)

        if(ticketAlreadyBought){
            throw new RequestError("Erro: ingresso já comprado!");
        }

        const id = this.idGenerator.generate()

        const ticket:ITicketDB = {
            id: id,
            show_id: show_id,
            user_id:payload.id
        }

        await this.showDatabase.ticketReservation(ticket)

        const response:ITicketReservationOutputDTO = {
            message:"Ingresso comprado com sucesso!",
            ticket
                    
        }

        return response

    }

    public removeReservation = async (input:IRemoveReservationInputDTO) => {
        const {token, show_id} = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Erro: Usuário não autenticado.")
        }
        
        const findShow = await this.showDatabase.checksIfShowExists(show_id)

        if(!findShow){
            throw new NotFoundError("Erro: Show não encontrado!");            
        }
    

        const findTicket = await this.showDatabase.findTicket(show_id)

        if(payload.role === USER_ROLES.NORMAL){  
            if(findTicket.user_id !== payload.id){
                throw new UnauthorizedError("Erro: Apenas usuários 'ADMIN' podem deletar qualquer compra.")
            }                                         
        }      

        await this.showDatabase.removeReservation(show_id, payload.id)

        const response:IRemoveReservationOutputDTO = {
            message:"Compra de Ingresso deletada com sucesso!"
        }

        return response

        
    }

}