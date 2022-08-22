import express, { Request, Response } from 'express'
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!")
})

type User = {
  id: number,
  name: string,
  phone: string,
  email: string,
  website: string,
}

const users: User[] =[
  {
    id: 1,
    name: "Gilead",
    phone: "(55)99999999",
    email: "gilead@gilead.com",
    website: "gilead.com.br" 
  },

  {
    id: 1,
    name: "João",
    phone: "(55)88888888",
    email: "joao@joao.com",
    website: "joao.com.br" 
  },

  {
    id: 1,
    name: "José",
    phone: "(55)77777777",
    email: "jose@jose.com",
    website: "jose.com.br" 
  },

  {
    id: 1,
    name: "Maria",
    phone: "(55)66666666",
    email: "maria@maria.com",
    website: "maria.com.br" 
  },

]


app.get("/users", (req: Request, res: Response) => {
  const allusers = users.map((user) => {
    return user
  })
  res.send(allusers)
})


