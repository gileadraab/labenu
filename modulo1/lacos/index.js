/*Exercícios de interpretação de código:
1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
R: Somando o valor de i à variavel "valor" ate i atingir o valor = 5. O resultado impresso será 10.


2. Leia o código abaixo:
a) O que vai ser impresso no console?
R: 19, 21, 23, 25, 27, 30

b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
R: Poderia utilizar o metodo indexOf()


3.Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++

R:
*
**
***
****
*/

/*Exercícios de escrita de código
1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
*/
const howManyPets = Number(prompt("Quantos animais de estimação você tem?"));

//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
if (howManyPets == 0){
    console.log("Que pena! Você pode adotar um pet!")
}

//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
else{
    let petNames = []
    let petAmmount = 0
    while (petAmmount < howManyPets){
        petNames.push(prompt("Nome do seu pet:"))
        petAmmount ++
    }

//c) Por fim, imprima o array com os nomes dos bichinhos no console
    console.log(petNames)
}

/*
2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
*/
let originalArray = [5, 2, 12, 4, 15, 3]
let evenArray = []
let writtenArray = []
let biggerNumber = 0
let smallerNumber = originalArray[0]

//a) Escreva um programa que **imprime** cada um dos valores do array original.
for (let i=0; i < originalArray.length; i++){
    console.log(`Elemento: ${originalArray[i]}`)

//b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    console.log(`Elemento / 10: ${originalArray[i]/10}`)
    
//c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
    if (originalArray[i]%2 == 0){
        evenArray.push(originalArray[i])
    }
    
//d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    writtenArray.push(`O elemento do índex ${i} é: ${originalArray[i]}`)

//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
    if (originalArray[i] > biggerNumber){
        biggerNumber = originalArray[i]
    }

    if (originalArray[i] < smallerNumber){
        smallerNumber = originalArray[i]
    }
}
console.log(evenArray)
console.log(writtenArray)
console.log(biggerNumber)
console.log(smallerNumber)

/*DESAFIOS
1. Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. 
    
Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:

Um resumo das funcionalidades são:

a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`*/
console.log ("Vamos jogar")
const playerChoice = Number(prompt("Escolha um número"))

// b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado no console:
let playerGuess = Number(prompt("Chute um número:"))
let playerTries = 0

// - O número chutado, com a mensagem: `O número chutado foi: <número>`
console.log(`O número chutado foi ${playerGuess}`)

// - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`
while (playerGuess != playerChoice){
playerTries ++
    if (playerGuess > playerChoice){
        console.log("Errou. O número escolhido é menor")
        playerGuess = Number(prompt("Chute um número:"))
    }
    else {
        console.log("Errou. O número escolhido é maior")
        playerGuess = Number(prompt("Chute um número:"))  
    }
}
// c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`
playerTries++
console.log (`Acertou\nO número de tentativas foi: ${playerTries}`)


/*
2. Uma das principais características de uma boa pessoa programadora é conseguir resolver seus problemas independentemente. Queremos que você comece a treinar isso a partir de hoje! Então, vamos pedir para que você faça uma alteração no código acima. Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar. Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.
Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração? O que você poderia ter feito para que fosse mais fácil? **Deixe comentários no seu código sobre esta reflexão.**
*/
console.log ("Vamos jogar")
const computerChoice = Math.floor((Math.random() * 100) + 1)

let myGuess = Number(prompt("Chute um número entre 1 e 10:"))
let myTries = 0

console.log(`O número chutado foi ${myTries}`)


while (myGuess != computerChoice){
myTries ++
    if (myGuess > computerChoice){
        console.log("Errou. O número escolhido é menor")
        myGuess = Number(prompt("Chute um número:"))
    }

    else {
        console.log("Errou. O número escolhido é maior")
        myGuess = Number(prompt("Chute um número:"))  
    }
}

playerTries++
console.log (`Acertou\nO número de tentativas foi: ${myTries}`)