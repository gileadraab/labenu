//Crie uma função que recebe uma lista de números positivos e retorna sua média arredondada para cima.

export const roundUpAverage = (numbers: number[]): number => {
  let total = 0
    
  for (const n of numbers) {
    total += n
  }

  const average = (total / numbers.length)

  const roundUpAverage = Math.ceil(average)

  return roundUpAverage
}

