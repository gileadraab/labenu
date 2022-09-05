import { connection } from '../../data/connection'
import {Request, Response} from 'express'
import { Purchase } from '../../data/types'
import { getProduct } from '../products/getProductById'

export const newPurchase = async (req: Request, res: Response): Promise<void> => {
  try {
    const {user_id, product_id, quantity} = req.body

    const [product] = await getProduct(String(product_id))

    const id = String(Date.now())
    console.log (product.price, quantity)
    const total_price = product.price * quantity
     
    const newPurchase: Purchase = {id, user_id, product_id, quantity, total_price }
    console.log (newPurchase)

    await connection('labecommerce_purchases').insert(newPurchase)

    res.status(201).send("Compra cadastrada")

  } catch (error: any) {
    throw new Error("ocorreu um erro")
  }
}