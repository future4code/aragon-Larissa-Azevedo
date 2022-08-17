import { ShowDatabase } from "../database/ShowDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { ICreateShowInputDTO, ICreateShowOutputDTO, Show } from "../models/Show"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { USER_ROLES } from "../models/User"

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

}