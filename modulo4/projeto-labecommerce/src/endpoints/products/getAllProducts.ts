import { connection } from '../../data/connection'
import {Request, Response} from 'express'

export const getAllProducts = async (req: Request, res: Response): Promise<any> => {
  try {
    const products = await connection('labecommerce_products').select("*")
    res.status(200).send(products)
    return products

  } catch (error: any) {
    throw new Error("ocorreu um erro")
  }
}