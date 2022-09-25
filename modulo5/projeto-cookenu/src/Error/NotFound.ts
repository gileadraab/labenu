import { BaseError } from "./BaseError";

export class NotFound extends BaseError{
  constructor(){
    super ("Ñão encontrado", 404)
  }
}