import { connection } from '../../data/connection'
import {Request, Response} from 'express'

export const getProductById = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = String(req.params.id)
    console.log(id)

    const product = await getProduct(id)
    res.status(200).send(product)


  } catch (error: any) {
    throw new Error("ocorreu um erro")
  }
}

export async function getProduct(id: string): Promise<any>{

  const [product] = await connection.raw(`
  SELECT * FROM labecommerce_products
  WHERE id = "${id}"
  `)
  return product
}