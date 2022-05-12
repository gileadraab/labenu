/*Exercícios de interpretação de código

1. Leia o código abaixo

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?
10 e 50

b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
Nada será impresso no console


2. Leia o código abaixo

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a. Explique o que essa função faz e qual é sua utilidade
coloca o texto em letras minúsculas e verifica a ocorrencia da string "cenoura"

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
i.   Eu gosto de cenoura
true

ii.  CENOURA é bom pra vista
true

iii. Cenouras crescem na terra
true
*/


/*Exercícios de escrita de código

1. Escreva as funções explicadas abaixo:

a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

*/
function myInfo() {
    console.log("Eu sou Gilead, tenho 30 anos, moro em Curitiba e sou estudante.")
    return
}

myInfo()

/*
b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
*/
function userInfo(name, age, city, profession){
    console.log(`Eu sou ${name}, tenho ${age} anos, moro em ${city} e sou ${profession}`) 
    return  
}

userInfo("Gilead", 30, "Curitiba", "Estudante")


/*
2. Escreva as funções explicadas abaixo:
    
a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
*/
function sumValues(value1, value2){
    const sumResult = value1 + value2
    console.log(sumResult)
    return
}

sumValues(2, 3)



/*
b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
*/
function compareValues(value1, value2){
    const comparisonResult = value1 >= value2
    console.log(comparisonResult)
    return
}

compareValues(5, 3)

/*
c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
*/
function isItEven(value1){
    const evenOrNotResult = value1%2 == 0
    console.log(evenOrNotResult)
    return
}

isItEven(2)

/*
d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas
*/
function stringSize(message){
    const stringLenght = message.length 
    const stringToUpper = message.toUpperCase()
    console.log(stringLenght, stringToUpper)
    return
}

stringSize("Qual o tamanho dessa mensagem?")

/*
3.   Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
*/
const number1 = Number(prompt("Forneça um número:"))
const number2 = Number(prompt("Forneça mais um número:"))

function mathOperations(number1, number2){
    console.log(`Números inseridos: ${number1} e ${number2}`)
    
    function sumValues(number1, number2){
        const sumResult = number1 + number2
        console.log(`Soma: ${sumResult}\n`)
    }
    sumValues(number1, number2)

    function subtractValues(number1, number2){
        const subtractResult = number1 - number2
        console.log(`Diferença: ${subtractResult}\n`)
    }
    subtractValues(number1, number2)

    function multiplyValues(number1, number2){
        const multiplyResult = number1 * number2
        console.log(`Multiplicação: ${multiplyResult}\n`)
    }
    multiplyValues(number1, number2)

    function divideValues(number1, number2){
        const divideResult = number1 / number2
        console.log(`Divisão: ${divideResult}\n`)
    }
    divideValues(number1, number2)

    return
}

mathOperations(number1, number2)

/*DESAFIOS
1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
    
    a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
*/
let printParameter = (parameter) => {
    console.log(parameter)
}

/*    
    b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo
*/
let sumParameter = (value1, value2) => {
    const parameter = value1 + value2
    printParameter(parameter)

} 
sumParameter(5,2)

/*
2.Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console.
*/
let pitagorasFunc = (cateto1, cateto2) => {
    const somaCatetos = (cateto1*cateto1) + (cateto2*cateto2)
    const hipotenusa = Math.sqrt(somaCatetos)
    console.log(`O valor da hipotenusa é: ${hipotenusa}`)
}
const cateto1 = prompt("Informe a medida do primeiro cateto:")
const cateto2 = prompt("Informe a medida do segundo cateto:")

pitagorasFunc(cateto1, cateto2)