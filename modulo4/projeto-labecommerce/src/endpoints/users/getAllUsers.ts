import { connection } from '../../data/connection'
import {Request, Response} from 'express'

export const getAllUsers = async (req: Request, res: Response): Promise<any> => {
  try {
    const users = await connection('labecommerce_users').select("*")
    res.status(200).send(users)
    return users

  } catch (error: any) {
    throw new Error("ocorreu um erro")
  }
}