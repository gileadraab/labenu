import { getRandomNumber } from "../src/exercicios/getRandomNumber"

describe("Get a random number between 0 and 10", () => {
  test("Deve ser retornado uma int com valores entre 0 e 10", () => {
    const allPossibleNumbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const result = getRandomNumber()

    expect(allPossibleNumbersArray).toContain(result)
  })
})