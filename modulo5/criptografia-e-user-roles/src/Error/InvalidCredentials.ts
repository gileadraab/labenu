import { BaseError } from "./BaseError";

export class InvalidCredentials extends BaseError{
  constructor(){
    super ("Credenciais Inválidas", 401)
  }
}