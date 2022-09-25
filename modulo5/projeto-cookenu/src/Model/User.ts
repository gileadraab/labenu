import { IUserDB, USER_ROLES } from "../types";

export class User {
  private id: string;
  private name: string;
  private email: string;
  private password: string;
  private role: USER_ROLES

  constructor (id: string, name: string, email: string, password: string, role: USER_ROLES = USER_ROLES.NORMAL){
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role
  }

  getId(){
    return this.id
  }

  getName(){
    return this.name
  }

  getEmail(){
    return this.email
  }

  getPassword(){
    return this.password
  }

  getRole(){
    return this.role
  }

  
}