import { BaseDatabase } from "../../src/database/BaseDatabase"
import { Show } from "../../src/models/Show"

export class ShowDatabaseMock extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    public createShow = async (show: Show) => {
        
    }


}

