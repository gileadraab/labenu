const defineOperation = process.argv[2]
const firstElement = Number(process.argv[3])
const secondElement = Number(process.argv[4])

const operation = (defineOperation, firstElement, secondElement) => {
  if (!defineOperation || !firstElement || !secondElement){
    return ("Um ou mais paramêtros faltando")
  } else {
    if (defineOperation == "add"){
      return (`Resposta: ${firstElement + secondElement}`)
    } else if (defineOperation == "sub") {
      return (`Resposta: ${firstElement - secondElement}`)
    } else if (defineOperation == "mult") {
      return (`Resposta: ${firstElement * secondElement}`)
    } else if (defineOperation == "div") {
      return (`Resposta: ${firstElement / secondElement}`)
    } else {
      return ("Operação não reconhecida")
    }
  }
}

console.log(operation(defineOperation, firstElement, secondElement))