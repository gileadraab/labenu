import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { IDeleteInputDTO } from "../models/User"

export class UserController {
  //SIGN UP
  signup = async (req: Request, res: Response) => {
    try{
      const {name, email, password} = req.body

      const input = {
        name,
        email,
        password,
      }

      const userBusiness = new UserBusiness()
      const response = await userBusiness.signup(input)

      res.status(201).send(response)

    }catch (error: any) {
      res.status(400).send({message: error.message})
    }
  }

  //LOGIN
  login = async (req: Request, res: Response) => {
    try{
      const{email, password} = req.body

      const input = {
        email,
        password
      }

      const userBusiness = new UserBusiness()
      const response = await userBusiness.login(input)

      res.status(201).send(response)

    }catch (error: any){
      res.status(500).send({message: error.message})
    }
  }

  //SEARCH USERS
  search = async (req: Request, res: Response) => {
    try{
      const token = req.headers.authorization as string

      const userBusiness = new UserBusiness()
      const response = await userBusiness.search(token)

      res.status(201).send(response)

    }catch (error: any){
      res.status(500).send({message: error.message})
    }
  }

  //DELETE USER
  delete = async (req: Request, res: Response) => {
    try{
      const token = req.headers.authorization as string
      const userId = req.params.id

      const input: IDeleteInputDTO = {
        token: token,
        userId: userId
      } 

      const userBusiness = new UserBusiness()
      await userBusiness.delete(input)
      
      const response = "Usuário deletado com sucesso!"

      res.status(201).send(response)

    }catch (error: any){
      res.status(500).send({message: error.message})
    }
  }
}