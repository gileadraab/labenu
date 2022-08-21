import express, { Request, Response } from "express";
import cors from "cors";
import { Transaction, Account, accounts } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});


app.post('/users/create',(req: Request, res: Response) => {
  try{
    const {name, cpf, birthDate} = req.body
    const [day, month, year] = birthDate.split('/')
    const dateOfBirth: Date = new Date (`${year}-${month}-${day}`)

    const timestampCurrentDate: number = new Date().getTime()
    const timestampBirthDate: number = dateOfBirth.getTime()
    const oneYearInTimestamp: number = 365*24*60*60*1000

    const userAge: number = timestampCurrentDate - timestampBirthDate
    const isUnderage: boolean = userAge < 18 * oneYearInTimestamp
        
    if (isUnderage){
      res.statusCode = 401
      throw new Error("User must be 18 or older do create an account")
    }

    accounts.filter((account) => {
      if (req.body.cpf == account.cpf){
        res.statusCode = 401
        throw new Error("This CPF has already been registered by another user")
      }
    })

    accounts.push({
      id: Date.now(),
      name,
      cpf,
      birthDate: dateOfBirth,
      balance: 0,
      statement: []
    })
    res.status(201).send("Account successfully created")

  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message })
  }

})

app.get('/users/',(req: Request, res: Response) => {
  try{
    const cpf = req.query.cpf

    accounts.filter((account) => {
      if (account.cpf == Number(cpf)){
        res.status(200).send(account)
        throw new Error("No accounts found for this cpf")
      }
    })

    if (!accounts.length) {
    res.statusCode = 401
    throw new Error("No accounts found")
    }
    res.status(201).send(accounts)

  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message })
  }
})
