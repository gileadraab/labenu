//Crie uma função que recebe um número natural e retorna true caso o mesmo seja par. Caso ímpar, deve retornar false.

export const checkIfEven = (n: number): boolean => {
  if (n % 2 == 0){
    return true
  }

  return false
}