import { Router } from 'express'
import { UserController } from '../controller/UserController'

export const userRouter = Router()

const userController = new UserController()

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.get("/", userController.search);
userRouter.delete("/delete/:id", userController.delete);