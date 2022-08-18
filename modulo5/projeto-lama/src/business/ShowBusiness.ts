import { ShowDatabase } from "../database/ShowDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { ICreateShowInputDTO, ICreateShowOutputDTO, IGetShowsOutputDTO, ITicketDB, ITicketReservationInputDTO, ITicketReservationOutputDTO, Show } from "../models/Show"
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

    public ticketReservation =async (input:ITicketReservationInputDTO) => {
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

        const ticketDB:ITicketDB = {
            id: id,
            show_id: show_id,
            user_id:payload.id
        }

        await this.showDatabase.ticketReservation(ticketDB)

        const response:ITicketReservationOutputDTO = {
            message:"Ingresso comprado com sucesso!"            
        }

        return response

    }

}