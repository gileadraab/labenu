//Crie uma função que gera um número aleatório entre 1 e 10.

export const getRandomNumber = (): number => {
  const RandomNumber = Math.floor(Math.random() * 11)

  return RandomNumber
}