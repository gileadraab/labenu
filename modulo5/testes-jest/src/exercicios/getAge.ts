//Crie uma função que recebe um ano de nascimento e retorna a idade atual.

export const getAge = (yearOfBirth: number) : number => {
  const today = new Date()
  const currentYear = today.getFullYear()
  const userAge = currentYear - yearOfBirth

  return userAge
}