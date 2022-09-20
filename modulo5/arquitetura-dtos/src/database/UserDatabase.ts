import { IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Arq_Users"

    public toUserDBModel = (user: User) => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }
        return userDB
    }

    public searchUserByEmail = async(email: string): Promise<IUserDB | undefined> => {
        const result: IUserDB[] = await BaseDatabase.connection()
        .select("*")
        .from(UserDatabase.TABLE_USERS)
        .where({email})
    
        return result[0]
      }

    public createUser = async(user: User) => {
        const userDB = this.toUserDBModel(user)

        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .insert(userDB)
    }

    public searchAllUsers = async(): Promise<IUserDB[] | undefined> => {
        const result: IUserDB[] = await BaseDatabase.connection()
        .select("id", "name", "email")
        .from(UserDatabase.TABLE_USERS)
    
        return result
      }

    public searchUserById = async(id: any): Promise<IUserDB | undefined> => {
        const result: IUserDB[] = await BaseDatabase.connection()
        .select("*")
        .from(UserDatabase.TABLE_USERS)
        .where({id})

        return result[0]
      }

    public deleteUser = async(id: any) => {
        await BaseDatabase.connection()
        .delete("*")
        .from(UserDatabase.TABLE_USERS)
        .where ({id})
    }

}