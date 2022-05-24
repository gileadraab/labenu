// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    arraySize = array.length;
    return arraySize
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let reverseArray = [];
    for (i = 0; i < array.length; i++){
        reverseArray.push(array[(array.length -1) - i])
    }  
    return reverseArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let sortedArray = array.sort(function (a, b){
        return a-b
    })
    return sortedArray
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let evenNumbers = []
    for (i = 0; i < array.length; i++){
        if (array[i] % 2 == 0){
            evenNumbers.push(array[i])
        }
    }  
    return evenNumbers
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let squareNumbers = []
    for (i = 0; i < array.length; i++){
        if (array[i] % 2 == 0){
            squareNumbers.push(array[i]**2)
        }
    }  
    return squareNumbers    
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let highestNumber = 0
    for (i = 0; i < array.length; i++){
        if (array[i] > highestNumber){
        highestNumber = array[i]
        }
    }
    return highestNumber
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let numbersComparer = {
        maiorNumero: 0,
        maiorDivisivelPorMenor: true,
        diferenca: 0
    }
    let menorNumero = 0

    if (num1 >= num2){
        numbersComparer.maiorNumero = num1
        menorNumero = num2
    }
    else{
        numbersComparer.maiorNumero = num2
        menorNumero = num1
    }

    numbersComparer.maiorDivisivelPorMenor = (numbersComparer.maiorNumero % menorNumero == 0)

    numbersComparer.diferenca = numbersComparer.maiorNumero - menorNumero

    return numbersComparer
}   


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let evenNumbersArray = []
    for (i = 0; i < n * 2; i++){
        if (i % 2 == 0){
            evenNumbersArray.push(i)
        } 
    }
    return evenNumbersArray
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if ((ladoA == ladoB) && (ladoB == ladoC)){
        return "Equilátero"
    }
    else if ((ladoA == ladoB) || (ladoA == ladoC) || ladoB == ladoC){
        return "Isósceles"
    }
    else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let shortArray = []
    let sortedArray = array.sort(function (a, b){
        return a-b
    })
    shortArray.push(sortedArray[sortedArray.length -2], sortedArray[1])

    return shortArray
}   
  
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const anonymousUser = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return anonymousUser
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const allowedPeople = pessoas.filter((names) => {
        return names.idade > 14 && names.idade < 60 && names.altura > 1.5
    })
    return allowedPeople
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const notAllowedPeople = pessoas.filter((names) => {
        return names.idade <= 14 || names.idade > 60 || names.altura < 1.5
    })
    return notAllowedPeople    
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    let newBalance = contas.map ((clients) => {
        let sum = 0
        for (let i = 0; i < clients.compras.length; i++) {
            sum += clients.compras[i];
        }
        return sum
    })

    for (i = 0; i < contas.length; i++){
        contas[i].saldoTotal = contas[i].saldoTotal - newBalance[i]
        contas[i].compras = []
    } 
    
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let alphabeticalArray = consultas.map ((patients) => {
        return patients.nome
    })
    alphabeticalArray = alphabeticalArray.sort()
    console.log(alphabeticalArray)


}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}