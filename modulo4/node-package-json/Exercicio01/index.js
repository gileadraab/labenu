const userName = process.argv[2]
const userAge = Number(process.argv[3])

const answer = (userName, userAge) => {
  if (!userName || !userAge){
    return ("Você não definiu um ou mais parâmetros, verifique")
  } else {
    return (`Olá, ${userName}! Você tem ${userAge} anos. Em sete anos você terá ${userAge + 7}`)
  }
}

console.log(answer(userName, userAge))
