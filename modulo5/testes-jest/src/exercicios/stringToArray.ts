//Crie uma função que recebe uma string como parâmetro e retorna um array de strings onde cada item é uma letra da palavra original.

export const stringToArray = (string: string): string[] => {
  const arrayOfStrings = string.split('')

  return arrayOfStrings
}