import { User } from "../Model/User";
import { IUserDB} from "../types";
import { BaseDataBase } from "./BaseDatabase";

export class UserData extends BaseDataBase{

  //CRIA USUARIO
  async createUser(user: User){

    await this.getConnetion()
    .insert({
      id: user.getId(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole()
    }).
    into("User")

    return `User criado com sucesso.`
  }

  //BUSCA POR EMAIL
  searchUserByEmail = async(email: string): Promise<IUserDB | undefined> => {
    const result: IUserDB[] = await this.getConnetion()
    .select("*")
    .from("User")
    .where({email})

    return result[0]
  }

  //RETORNA PROFILES
  async searchAllUsers(){
    const result: IUserDB[] = await this.getConnetion()
    .select("*")
    .from("User")
    return result
  }
}