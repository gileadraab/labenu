import { User } from "../Model/User";
import { IUserDB} from "../types";
import { BaseDataBase } from "./BaseDatabase";

export class UserDataBase extends BaseDataBase{

  //CRIA USUARIO
  createUser = async (user: User) => {
    await this.getConnetion()
    .insert({
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole()
    }).
    into("cookenu_users")

    return `User criado com sucesso.`
  }

  //BUSCA POR EMAIL
  searchUserByEmail = async(email: string): Promise<IUserDB | undefined> => {
    const result: IUserDB[] = await this.getConnetion()
    .select("*")
    .from("cookenu_users")
    .where({email})

    return result[0]
  }

  //SEARCH FOR ID
  searchUserById = async(id: string): Promise<IUserDB | undefined> => {
    const result: IUserDB[] = await this.getConnetion()
    .select("name", "email", "id")
    .from("cookenu_users")
    .where({id})

    return result[0]
  }


  //RETORNA PROFILES
  async searchAllUsers(){
    const result: IUserDB[] = await this.getConnetion()
    .select("*")
    .from("cookenu_users")
    return result
  }
}