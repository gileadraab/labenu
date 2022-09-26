import {checkIfEven} from "../src/exercicios/checkIfEven"

describe("Check if even", () => {
  test("A entrada 10 deve retornar true", () => {
    const input = 10
    const result = checkIfEven(input)

    expect(result).toBe(true)
  })
})