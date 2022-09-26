import {usersArray} from "../src/exercicios/usersArray"

describe("Check if an user exist in an array", () => {
  test("O array usersArray deve conter o user 'Astrodev'", () => {
    const user = "Astrodev"

    expect(usersArray).toContainEqual(user)
  })
})