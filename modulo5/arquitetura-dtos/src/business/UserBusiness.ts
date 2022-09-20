import { UserDatabase } from "../database/UserDatabase"
import { User, ISignupInputDTO, ISignupOutputDTO, ILoginInputDTO, IDeleteInputDTO  } from "../models/User"
import { IdGenerator } from "../services/IdGenerator"
import { HashManager } from "../services/HashManager"
import { Authenticator, ITokenPayload } from "../services/Authenticator"

export class UserBusiness {
  //SIGN UP
  signup = async(input: ISignupInputDTO) => {
    const {name, email, password} = input

    if (!name || typeof name !== "string" || name.length < 6){
      throw new Error ("Parâmetro name inválido")
    }

    if (!email || typeof email !== "string" || !email.includes("@")){
      throw new Error ("Parâmetro email inválido")
    }

    const userDatabase = new UserDatabase()
    const isEmailInUse = await userDatabase.searchUserByEmail(email)

    if (isEmailInUse) {
      throw new Error ("Email já registrado")
    }
    
    const idGenerator = new IdGenerator()
    const id = idGenerator.generate()

    const hashManager = new HashManager()
    const hashedPassword = await hashManager.hash(password)

    const user = new User(id, name, email, hashedPassword)

    await  userDatabase.createUser(user)

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole()
    }

    const authenticator = new Authenticator()
    const token = authenticator.generateToken(payload)

    const response: ISignupOutputDTO = {
      message: "Usuário cadastrado com sucesso",
      token
    }

    return response
  }

  //LOGIN
  login = async (input: ILoginInputDTO) => {
    const {email, password} = input

    if(!email || !password){
      throw new Error("Favor preencher todos os campos")
    }

    const userDataBase = new UserDatabase()
    const user = await userDataBase.searchUserByEmail(email)
  
    if (!user){
      throw new Error("Credenciais inválidas");
    } 
  
    const hashManager = new HashManager()
    const isPasswordCorrect = await hashManager.compare(password, user.password)
  
    if (!isPasswordCorrect){
      throw new Error("Credenciais inválidas");
    }
  
    const payload: ITokenPayload = {
      id: user.id,
      role: user.role
    }

    const token = new Authenticator().generateToken(payload)

    const response = {
      token
    }

    return response
  }

  //SEARCH
  search = async (token: string) => {

    if(!token){
      throw new Error("Não autorizado")
    }

    const payload: ITokenPayload = new Authenticator().getTokenPayload(token)

    if (!payload){
      throw new Error("Não autorizado")
    }

    const users = new UserDatabase()
    const response = users.searchAllUsers()

    return response
  }

  //DELETE
  delete = async (input: IDeleteInputDTO) => {

    if(!input.token){
      throw new Error("Não autorizado")
    }

    const payload: ITokenPayload = new Authenticator().getTokenPayload(input.token)

    if (!payload){
      throw new Error("Não autorizado")
    }

    if (payload.role != "ADMIN"){
      throw new Error("Não autorizado")
    }

    const users = new UserDatabase()
    const isThereAuser = users.searchUserById(input.userId)

    if(!isThereAuser){
      throw new Error("Usuário nao encontrado")
    }

    const response = users.deleteUser(input.userId)

    return response
  }
}