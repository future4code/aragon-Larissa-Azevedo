import { IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Arq_Users"

    public createUser = async (user: User) => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(userDB)
    }

    public findByEmail = async (email: string) => {
        const result: IUserDB[] = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .select()
        .where({email})

        return result[0]
    }

    public getAllUsers = async () => {
        const usersDB: IUserDB[] = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .select()

        return usersDB
    }

    public deleteUser = async (id:string) => {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .delete()
        .where({id:id})

        return result
    }

}