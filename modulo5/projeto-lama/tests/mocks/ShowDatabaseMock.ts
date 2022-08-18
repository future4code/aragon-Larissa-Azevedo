import { BaseDatabase } from "../../src/database/BaseDatabase"
import { IShowDB, Show } from "../../src/models/Show"

export class ShowDatabaseMock extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    public createShow = async (show: Show) => {
        
    }

    public getShows =async () => {
      const shows: IShowDB[] = [
        {
            id: "201",
            band: "Foo Fighters",
            starts_at: new Date("2022-12-05"),
          },
          {
            id: "202",
            band: "System of a Down",
            starts_at: new Date("2022-12-06"),
          },
          {
            id: "203",
            band: "Evanescence",
            starts_at: new Date("2022-12-07"),
          },
          {
            id: "2938d0ff-5b1e-4519-aace-bcf7ace62d57",
            band: "Daisy Jones & The Six",
            starts_at: new Date("2012-12-22"),
          },
      ]          
      
      return shows
    }

    public getTickets =async (show_id:string) => {
      switch(show_id){
          case "201":
              return 2
              
          default:
              return 0
      }
    }


}

