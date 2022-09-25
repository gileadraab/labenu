import { Request, Response } from "express"; 
import { UserDataBase } from "../Data/UserDataBase";
import { EmailAlreadyInUse } from "../Error/EmailAlreadyInUse";
import { MissingFields } from "../Error/MissingFields";
import { IdGenerator } from "../Services/IdGenerator";
import {User} from "../Model/User"
import { Authenticator, TokenPayload } from "../Services/Authenticator";
import { HashManager } from "../Services/HashManager";
import { InvalidCredentials } from "../Error/InvalidCredentials";
import { NotAuthorized } from "../Error/NotAuthorized";
import { USER_ROLES } from "../types";
import { InvalidEmail } from "../Error/InvalidEmail";
import { InvalidPassword } from "../Error/InvalidPassword";
import { NotFound } from "../Error/NotFound";

export class UserEndpoint {
  //ADD NEW USER
  signUp = async (req:Request, res: Response) => {
    try {
      const {name, email, password, role} = req.body

  //Check if all fields are filled
      if (!name || !email || !password){
        throw new  MissingFields()
      }

  //Check if amail address is unique
      const userData = new UserDataBase()
      const isEmailInUse = await userData.searchUserByEmail(email)

      if (isEmailInUse) {
        throw new EmailAlreadyInUse()
      }

  //Check if email address contains an @     
      if (email.indexOf("@") === -1) {
        throw new InvalidEmail();
      }
  
  //Check for password minimum size
      if (password.length < 6) {
        throw new InvalidPassword();
      }

  //Generate new ID
      const newId = new IdGenerator()
      const id = newId.createId()

  //Generate hashed password
      const hashManager =  new HashManager()
      const hash = await hashManager.hash(password) 

  //Add user to database
      const user = new User(id, name, email, hash, role)

      await userData.createUser(user)
  
  //Generate payload
      const payload: TokenPayload = {
        id,
        role
      }
  
  //Generate token
      const token = new Authenticator().generateToken(payload)

      res.status(201).send({message: "Usuário cadastrado com suceso!", token})

    } catch (error: any) {
      res.status(500).send({message: error.message})
    }
  }


  //LOGIN
  login = async (req: Request, res: Response) => {
    try{
      const{email, password} = req.body
  
  //Check for missing fields
    if(!email || !password){
      throw new MissingFields()
    }


  //Verify if user is registered in the database
      const userData = new UserDataBase()
      const user = await userData.searchUserByEmail(email)
  
      if (!user){
        throw new InvalidCredentials();
      } 
  
  //Confirm password
      const hashManager = new HashManager()
      const isPasswordCorrect = await hashManager.compare(password, user.password)

      if (!isPasswordCorrect){
        throw new InvalidCredentials();
      }
  
  //Generate payload
      const payload: TokenPayload = {
        id: user.id,
        role: user.role
      }

  //Generate token
      const token = new Authenticator().generateToken(payload)

      res.status(201).send({token})

    }catch (error: any){
      res.status(500).send({message: error.message})
    }
  }

  //GET OWN PROFILE
  profile = async(req: Request, res: Response) => {
    try{
      const token = req.headers.authorization as string

      console.log(token)

      if(!token){
        throw new NotAuthorized()
      }

      const payload: TokenPayload = new Authenticator().verifyToken(token)
      console.log("payload:", payload, "token:", token)

      if (!payload){
        throw new NotAuthorized()
      }

      const userData = new UserDataBase()

      const user = await userData.searchUserById(payload.id)
      res.status(201).send({user})  
      
    }catch (error: any){
      res.status(500).send({message: error.message})
    }
  }   

  ///GET OTHER PROFILE
  getProfile = async(req: Request, res: Response) => {
    try{
      const id = req.params.id
      const token = req.headers.authorization as string

      if(!token){
        throw new NotAuthorized()
      }

      const payload: TokenPayload = new Authenticator().verifyToken(token)

      if (!payload){
        throw new NotAuthorized()
      }

      const userData = new UserDataBase()
    
      const user = await userData.searchUserById(id)
      res.status(201).send({user})  

    }catch (error: any){
      res.status(500).send({message: error.message})
    }
  } 


  //FOLLOW USER
  follow = async(req: Request, res: Response) => {
    try{
      const id = req.body.id
      const token = req.headers.authorization as string

      if(!token){
        throw new NotAuthorized()
      }

      const payload: TokenPayload = new Authenticator().verifyToken(token)

      const userData = new UserDataBase()

      const user = await userData.searchUserById(id)

      if (!user){
        throw new NotFound()
      }

      await userData.followProfile(payload.id, id)
      res.status(201).send({message: "Usuário seguido com suceso!"})  


    } catch (error: any){
      res.status(500).send({message: error.message})
    }
  }

}