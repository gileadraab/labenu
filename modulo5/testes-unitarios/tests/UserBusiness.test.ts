import { UserBusiness } from "../src/business/UserBusiness"
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"

describe ("Testando a UserBusiness", ()=> {
  const userBusiness = new UserBusiness (
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new HashManagerMock(),
    new AuthenticatorMock()

  )

  test("Retorna um token ao efetuar o cadastro", async () => {
    const input: ISignupInputDTO = {
      name: "Cadastro Teste",
      email: "teste@email.com",
      password: "12345678910"
    }

    const response = await userBusiness.signup(input)
    expect(response.message).toBe("Cadastro realizado com sucesso")
    expect(response.token).toBe("token-mock-normal")
  })

  test("Retorna um token ao efetuar um login bem sucedido", async () => {
    const input: ILoginInputDTO = {
      email: "usermock@gmail.com",
      password: "mock123"
    }

    const response = await userBusiness.login(input)
    expect(response.message).toBe("Login realizado com sucesso")
    expect(response.token).toBe("token-mock-normal")

  })
})