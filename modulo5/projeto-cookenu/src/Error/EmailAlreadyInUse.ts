import { BaseError } from "./BaseError";

export class EmailAlreadyInUse extends BaseError{
  constructor(){
    super ("Email já cadastrado", 401)
  }
}