import { BaseError } from "./BaseError";

export class MissingFields extends BaseError{
  constructor(){
    super("Valores nao informados", 404)
  }
}