import {stringToNumber} from "../src/exercicios/stringToNumber"

describe("String to number", () => {
  test("A entrada '50' deve retornar 50", () => {
    const input = "50"
    const result = stringToNumber(input)

    expect(result).toBe(50)
  })
})