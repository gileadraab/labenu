import { BaseError } from "./BaseError";

export class InvalidEmail extends BaseError{
  constructor(){
    super ("Email inválido", 401)
  }
}