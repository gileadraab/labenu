import { connection } from '../../data/connection'
import {Request, Response} from 'express'

export const getUserPurchases = async (req: Request, res: Response): Promise<any> => {
  try {
    const user_id = String(req.params.user_id)

    const purchases = await getPurchases(user_id)
    res.status(200).send(purchases)


  } catch (error: any) {
    throw new Error("ocorreu um erro")
  }
}

export async function getPurchases(id: string): Promise<any>{

  const [purchases] = await connection.raw(`
  SELECT * FROM labecommerce_purchases
  WHERE user_id = "${id}"
  `)
  return purchases
}