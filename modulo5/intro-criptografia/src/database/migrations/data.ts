import { IUserDB, USER_ROLES } from "../../models/User"

export const users: IUserDB[] = [
    {
        id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b",
        nickname: "FunDev",
        email: "astrodev@gmail.com",
        password: "$2a$12$km/IrdL4pHCMxWO/V58zJ.ncQB3fbSbjVTJNWwuhwoerltOurQl3m", //bananinha
        role:USER_ROLES.NORMAL
    },
    {
        id: "f03017bb-2c08-4cdc-bb63-7fbd7cebe01f",
        nickname: "Fulilin",
        email: "fulano@gmail.com",
        password: "$2a$12$TWa2Ti/K1fzOshmXZIZPDO17L9d2OeG.0OsFVVTiViKHZ3sedmlzC", //qwerty00
        role: USER_ROLES.NORMAL
    },
    {
        id: "7079b8e4-95cd-48aa-82a9-77454e94b789",
        nickname: "Ciclanin",
        email: "ciclana@gmail.com",
        password: "$2a$12$zcIo8W2lPEUmc6KKo6f9l.UfjvNTFGK86NxkGAHatn34fu12HdAxK", //asdfg123
        role: USER_ROLES.ADMIN
    }
]