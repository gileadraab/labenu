import { BaseError } from "./BaseError";

export class InvalidPassword extends BaseError{
  constructor(){
    super ("Senha inválida, sua senha deve conter ao menos 6 caracteres", 401)
  }
}