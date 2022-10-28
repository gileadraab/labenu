import {stringLength} from "../src/exercicios/stringLength"

describe("Check for the amounth of characteres in a string", () => {
  test("A entrada oi deve retornar 2", () => {
    const input = "oi"
    const result = stringLength(input)

    expect(result).toBe(2)
  })
})