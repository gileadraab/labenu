import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

type User = {
  id: Number,
  name: String,
  email: String,
  type: String,
  age: Number
}

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: UserType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: UserType.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: UserType.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: UserType.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: UserType.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: UserType.ADMIN,
      age: 60
  }
]

//GET ALL USERS
// app.get('/users',(req: Request, res: Response) => {
//   try{
//     if (!users) {
//       res.statusCode = 401
//       throw new Error("No users to be displayed")
//     }
//     res.send(users)
//   } catch(error: any) {
//     res.status(res.statusCode || 500).send({ message: error.message })
//   }
// })

//GET ADMINS
app.get('/users/:type',(req: Request, res: Response) => {
  try{
    const userType = req.params.type.toUpperCase()
    if (userType !== "ADMIN" && userType !== "NORMAL"){
      res.statusCode = 401
      throw new Error("The 'userType' param must be'NORMAL' or 'ADMIN'")
    } 
    const admins = users.filter((user) => {
      if(userType == user.type){
        return user
      }
    })
    res.send(admins)
  } catch(error: any) {
    res.status(res.statusCode || 500).send({ message: error.message })
  }
})

//GET USER BY NAME
app.get('/users',(req: Request, res: Response) => {
  try{
    const name: string = req.query.name as string
    const userByName = users.filter((user) => {
      if(user.name === name){
        return user
      }
    })

    if (!userByName.length){
      res.statusCode = 401
      throw new Error("User not found")
    }

    res.send(userByName)
  } catch(error: any) {
    res.status(res.statusCode || 500).send({ message: error.message })
  }
})

//ADD USER
app.post('/users',(req: Request, res: Response) => {
  try{
    const {id, name, email, type, age} = req.body
    const newUser: User = {
      id,
      name,
      email,
      type,
      age
    }

    if (!id || !name || !email || !type || !age){
      res.statusCode = 422
      throw new Error("Body must contain all params")
    }

    users.push(newUser)


    res.status(201).send({message:`User created`})
  } catch(error: any) {
    res.status(res.statusCode || 500).send({ message: error.message })
  }
})