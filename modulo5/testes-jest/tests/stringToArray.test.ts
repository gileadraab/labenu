import {stringToArray} from "../src/exercicios/stringToArray"

describe("String to array", () => {
  test("A entrada ola deve retornar ['o','l','a']", () => {
    const input = "ola"
    const result = stringToArray(input)

    expect(result).toEqual(["o", "l", "a"])
  })
})