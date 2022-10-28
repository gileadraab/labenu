import {toUpperCase} from "../src/exercicios/toUpperCase"

describe("To upper case string", () => {
  test("A entrada bananinha deve retornar BANANINHA", () => {
    const input = "bananinha"
    const result = toUpperCase(input)

    expect(result).toBe("BANANINHA")
  })
})