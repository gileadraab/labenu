import { Request, Response } from "express"; 
import { UserData } from "../Data/UserData";
import { EmailAlreadyInUse } from "../Error/EmailAlreadyInUse";
import { MissingFields } from "../Error/MissingFields";
import { generateId } from "../Services/generateId";
import {User} from "../Model/User"
import { Authenticator } from "../Services/authenticate";

export class UserEndpoint {
  //CRIAR USER
  async create(req:Request, res: Response) {
    try {
      const {email, password} = req.body

      if (!email || !password){
        throw new  MissingFields()
      }

      const userData = new UserData()
      const checkForEmailavailability = await userData.searchUserByEmail(email)

      console.log(checkForEmailavailability)

      if (checkForEmailavailability.length) {
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

      const user = new User(id, email, password)

      await userData.createUser(user)

      const token = new Authenticator().generateToken(id)

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
      
      const checkForPassword = await userData.searchUserByPassword(password)
      const checkForEmail = await userData.searchUserByEmail(email)

      if (!checkForPassword.length || !checkForEmail.length){
        throw new Error("Dados incorretos");
      } 

      const token = new Authenticator().generateToken(checkForPassword[0].id)

      res.status(201).send({token})


    }catch (error: any){
      res.status(500).send({message: error.message})
    }
  }

  //GET USER INFO
  async profile(req: Request, res: Response){
    try{
      const token = req.headers.authorization as string

      const validarToken = new Authenticator().verifyToken(token)
      const id = validarToken.id

      const userData = new UserData

      const user = await userData.searchUserById(id)  
      console.log(user)          
      res.status(201).send({user})


    }catch (error: any){
      res.status(500).send({message: error.message})
    }
  }   


}