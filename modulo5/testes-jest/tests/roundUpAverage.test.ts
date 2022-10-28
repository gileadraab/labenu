import { roundUpAverage } from "../src/exercicios/roundUpAverage"

describe("Check if it returns an round up average of the numbers in an array", () => {
  test("a entrada [10, 4, 7, 6] gera a saída 7", () => {
    const input = [10, 4, 7, 6]
    const result = roundUpAverage(input)

    expect(result).toBe(7)
  })
})