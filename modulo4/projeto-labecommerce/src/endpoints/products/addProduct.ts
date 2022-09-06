import { connection } from '../../data/connection'
import {Request, Response} from 'express'
import { Product } from '../../data/types'

export const addProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const {name, price, image_url} = req.body
    const id = String(Date.now())
  
    const newProduct: Product = {id, name, price, image_url }

    await connection('labecommerce_products').insert(newProduct)

    res.status(201).send("Produto Cadastrado")

  } catch (error: any) {
    throw new Error("ocorreu um erro")
  }
}
 