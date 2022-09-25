import jwt from "jsonwebtoken";
import dotenv from "dotenv"
import { USER_ROLES } from "../types";

dotenv.config()

export interface TokenPayload {
  id: string,
  role: USER_ROLES
}

export class Authenticator{

  generateToken(payload: TokenPayload) {
    const token = jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
        expiresIn: "1hr"
      }
    )
    
    return token

  }

  verifyToken(token: string){
    const payload: TokenPayload = jwt.verify(token, process.env.JWT_KEY as string) as any

    return payload
  }
}