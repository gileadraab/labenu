import { User } from "../Model/User";
import { BaseDataBase } from "./BaseDatabase";

export class UserData extends BaseDataBase{

  //CRIA USUARIO
  async createUser(user: User){

    await this.getConnetion()
    .insert({
      id: user.getId(),
      email: user.getEmail(),
      password: user.getPassword()
    }).
    into("User")

    return `User criado com sucesso.`
  }

  //BUSCA POR EMAIL
  async searchUserByEmail(email: string){
    const result = await this.getConnetion()
    .select("*")
    .from("User")
    .where({email: email})

    return result
  }

  //BUSCA POR SENHA
  async searchUserByPassword(pass: string){
    const result = await this.getConnetion()
    .select("*")
    .from("User")
    .where({password: pass})

    return result
  }

  //RETORNA PROFILE
  async searchUserById(id: string){
    const result = await this.getConnetion()
    .select("*")
    .from("User")
    .where({id: id})

    return result
  }
}