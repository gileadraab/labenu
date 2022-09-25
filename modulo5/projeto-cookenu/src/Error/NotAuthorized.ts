import { BaseError } from "./BaseError";

export class NotAuthorized extends BaseError{
  constructor(){
    super ("Não autorizado", 403)
  }
}