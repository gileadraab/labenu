import { getAge } from "../src/exercicios/getAge"

describe("Receive the birth year and retur the current age", () => {
  test("A entrada 1992 deve retornar 30", () => {
    const input = 1992
    const result = getAge(input)

    expect(result).toBe(30)
  })
})