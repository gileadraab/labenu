import { connection } from '../../data/connection'
import {Request, Response} from 'express'
import { User } from '../../data/types'

export const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {name, email, password} = req.body
    const id = String(Date.now())
  
    const newUser: User = {id, name, email, password }

    await connection('labecommerce_users').insert(newUser)

    res.status(201).send("Usuário Cadastrado")

  } catch (error: any) {
    throw new Error("ocorreu um erro")
  }
}
 