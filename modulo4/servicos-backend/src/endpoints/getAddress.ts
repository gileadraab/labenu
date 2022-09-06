import axios from 'axios'
import { connection } from '../data/connection'
import {Request, Response} from 'express'

export const addAdress = async (req: Request, res: Response): Promise<void> => {
  const cep = req.body.cep
  const numero = req.body.numero
  const complemento = req.body.complemento

  const id = Date.now()
  
  const address = await getAddress(cep)


  const result = await connection
  .raw(`
    INSERT INTO address (id, logradouro, numero, complemento, bairro, cidade, estado, cep)
    VALUES (
      ${id},
      ${address.logradouro},
      ${numero},
      ${complemento},
      ${address.bairro},
      ${address.cidade},
      ${address.estado},
      ${cep}
    )
  `)
  return result[0]
}
 

export const getAddress = async (cep: string) => {
  try{
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)

    const {logradouro, bairro, localidade, uf} = response.data

    const address = {
      logradouro,
      bairro,
      cidade: localidade,
      estado: uf
    }
    console.log(address)
    return address

  } catch (error){
    throw new Error()
  }
}