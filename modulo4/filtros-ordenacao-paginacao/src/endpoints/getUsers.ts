import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export const getUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      let name: any = req.query.name || ""
      let page: any = req.query.page || ""
      let type = req.params.type || ""

      if (page < 1 || isNaN(page)){
         page = 1
      }
      const size = 5
      const offset: number = size * (page - 1)


      const users = await selectUser(name, offset, type)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

export default async function selectUser(name: string, offset:number, type: string):Promise<any> {
   if (!name && !type){
      const result = await connection
      .raw(`
         SELECT id, name, email, type
         FROM aula49_exercicio
         ORDER BY name DESC
         LIMIT 5
         OFFSET ${offset};
      `)
      return result[0]
   } else {
      const result = await connection
      .raw(`
         SELECT id, name, email, type
         FROM aula49_exercicio 
         WHERE name LIKE '%${name}%'
         AND type  LIKE '%${type}%'
         ORDER BY name ASC
         LIMIT 5
         OFFSET ${offset};
      `)
      return result[0]
   }
}