import { dateFormat } from "../src/exercicios/dateFormat"

describe("Receive a date as 'yyyy/mm/dd' and format it to 'dd/mm/yyyy'", () => {
  test("A entrada 2022/09/26 deve retornar 26/09/2022", () => {
    const input = "2022/09/26"
    const result = dateFormat(input)

    expect(result).toBe("26/09/2022")
  })
})