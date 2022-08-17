import { IShowDB, Show } from "../models/Show"
import { BaseDatabase } from "./BaseDatabase"

export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    public createShow = async (input:Show) => {
        const showDB: IShowDB = {
            id: input.getId(),
            band:input.getBand(),
            starts_at:input.getStartsAt(),
        }

        await BaseDatabase.connection(ShowDatabase.TABLE_SHOWS).insert(showDB)
    
    }

}

