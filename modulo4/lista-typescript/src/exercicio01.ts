const userName: string = process.argv[2] 
const dateOfBirth: string = process.argv[3]

function sentenceBuilder (name: string, dateOfBirth:string): string {
  const birthArray: string[] = dateOfBirth.split("/")
  const dayOfBirth: string = birthArray[0]
  const monthOfBirth: string = birthArray[1]
  const yearOfBirth: string = birthArray[2]

  const sentence: string = `Olá me chamo ${name}, nasci no dia ${dayOfBirth} do mês ${monthOfBirth} do ano de ${yearOfBirth}`

  return sentence
}

console.log(sentenceBuilder(userName, dateOfBirth))