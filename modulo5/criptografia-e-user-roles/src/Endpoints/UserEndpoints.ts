import { Request, Response } from "express"; 
import { UserData } from "../Data/UserData";
import { EmailAlreadyInUse } from "../Error/EmailAlreadyInUse";
import { MissingFields } from "../Error/MissingFields";
import { generateId } from "../Services/generateId";
import {User} from "../Model/User"
import { Authenticator, TokenPayload } from "../Services/authenticate";
import { HashManager } from "../Services/HashManager";
import { InvalidCredentials } from "../Error/InvalidCredentials";
import { NotAuthorized } from "../Error/NotAuthorized";
import { USER_ROLES } from "../types";

export class UserEndpoint {
  //CRIAR USER
  async create(req:Request, res: Response) {
    try {
      const {email, password, role} = req.body

      if (!email || !password){
        throw new  MissingFields()
      }

      const userData = new UserData()
      const checkForEmailavailability = await userData.searchUserByEmail(email)

      console.log(checkForEmailavailability)

      if (checkForEmailavailability) {
        throw new EmailAlreadyInUse()
      }

      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("email inválido");
      }
  
      if (!req.body.password || req.body.password.length < 6) {
        throw new Error("senha inválida");
      }

      const newId = new generateId()
      const id = newId.createId()

      const hashManager = new HashManager()
      const hash = await hashManager.hash(password) 

      const user = new User(id, email, hash, role)

      await userData.createUser(user)

      const payload: TokenPayload = {
        id,
        role
      }

      const token = new Authenticator().generateToken(payload)

      res.status(201).send({message: "Usuário cadastrado com suceso!", token})

    } catch (error: any) {
      res.status(500).send({message: error.message})
    }
  }

  //LOGIN
  async login(req: Request, res: Response){
    try{
      const{email, password} = req.body

      const userData = new UserData()
      
      const user = await userData.searchUserByEmail(email)

      if (!user){
        throw new InvalidCredentials();
      } 

      const hashManager = new HashManager()
      const isPasswordCorrect = await hashManager.compare(password, user.password)

      if (!isPasswordCorrect){
        throw new InvalidCredentials();
      }

      const payload: TokenPayload = {
        id: user.id,
        role: user.role
      }

      const token = new Authenticator().generateToken(payload)

      res.status(201).send({token})

    }catch (error: any){
      res.status(500).send({message: error.message})
    }
  }

  //GET USER INFO
  async profile(req: Request, res: Response){
    try{
      const token = req.headers.authorization as string

      console.log(token)

      if(!token){
        throw new NotAuthorized()
      }

      const payload: TokenPayload = new Authenticator().verifyToken(token)
      
      console.log(payload.role)
      if(payload.role !== USER_ROLES.NORMAL){
        throw new NotAuthorized()
      }

      const userData = new UserData
      const users = await userData.searchAllUsers()  

      console.log(users)          
      res.status(201).send({users})


    }catch (error: any){
      res.status(500).send({message: error.message})
    }
  }   

}