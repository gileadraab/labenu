const word : string = process.argv[2]
const ammountOfLetters: number = word.length

function anagramsCalculator (word: string) : number {
  const ammountOfLetters: number = word.length
  const fatorial = ammountOfLetters
  let result = fatorial
  const firstMultiplier = fatorial - 1

  if (ammountOfLetters === 0) {
    return 1;
  } else {
    for (let i = firstMultiplier; i > 0; i--) {
      result *= i
    }
    return result
  }


}
console.log(anagramsCalculator(word))