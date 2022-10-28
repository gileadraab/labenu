import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import { pingRouter } from './router/pingRouter'
import { userRouter } from './router/userRouter'
import { UserController } from './controller/UserController'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.use("/ping", pingRouter)
app.use("/users", userRouter)

//SIGN UP
const user  = new UserController()
app.post("/users/signup", user.signup)

//LOGIN
app.post("/users/login", user.login)

//SEARCH USER
app.get("/users", user.search)

//DELETE USER
app.get("/users/:id", user.delete)

