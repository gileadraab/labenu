const numbers: number[] = [Number(process.argv[2]), Number(process.argv[3]), Number(process.argv[4])]

function obterEstatisticas(numeros: number[]) {
  const numerosOrdenados: number[] = numeros.sort(
      (a, b) => a - b
  )

  let soma = 0

  for (let num of numeros) {
      soma += num
  }

  const estatisticas = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length
  }

  return estatisticas
}
console.log(obterEstatisticas(numbers))

type Amostra = {
  numeros: number[],
  obterEstatisticas: (numeros: number[]) => {}
}
