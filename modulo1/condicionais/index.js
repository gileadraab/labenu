/* Exercícios de interpretação de código
1. Leia o código abaixo:
a) Explique o que o código faz. Qual o teste que ele realiza? 
Verifica se o numero informado é um numero par, verifica isso testando qual o resto da divisão do numero por 2

b) Para que tipos de números ele imprime no console "Passou no teste"? 
Para numeros pares

c) Para que tipos de números a mensagem é "Não passou no teste"? 
Para números ímpares


2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
a) Para que serve o código acima?
Serve para verificar o preço de uma fruta indicada pelo usuario

b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
"O preço da fruta Maçã é R$ 2.25"

c) c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
"O preço da fruta Maçã é R$ 5" 


3. Leia o código abaixo:
a) O que a primeira linha está fazendo?
Solicita um número ao usuário

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
10 - "Esse número passou no teste"
-10 - Nenhuma mensagem

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
Sim pois toda ação atrelada a condição deve estar dentro do escopo definido pelas chaves
*/


/*Exercícios de escrita de código
1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
a) Faça um prompt para receber a idade do usuário e guarde em uma variável.

b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.

c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."
*/ 
const userAge = Number(prompt("Idade:"))

if (userAge >= 18){
    console.log("Você pode dirigir")
}
else {
    console.log("Você não pode dirigir.")
}


/*
2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
*/
const userShift = prompt("Em qual turno você estuda? Digite M (matutino), V (Vespertino) ou N (Noturno):").toUpperCase()

if (userShift == "M"){
    console.log("Bom Dia!")
}
else if (userShift == "V"){
    console.log("Boa Tarde!")
}
else{
    console.log("Boa Noite!")
}


/*
3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
*/
const studentShift = prompt("Em qual turno você estuda? Digite M (matutino), V (Vespertino) ou N (Noturno):").toUpperCase()

switch(studentShift){
    case 'M':
        console.log("Bom Dia!")
        break
    case 'V':
        console.log("Boa Tarde!")
        break
    case 'N':
        console.log("Boa Noite!")
        break
}


/*
4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("
*/
const movieGenre = prompt("Gênero do Filme:").toLowerCase();
const movieTicketPrice = Number(prompt("Preço do Ingresso:"));

if (movieGenre == 'fantasia' && movieTicketPrice < 15){
    console.log("Bom filme!")
}
else {
    console.log("Escolha outro filme :(")
}


/*
DESAFIOS
1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.
*/
const newMovieGenre = prompt("Gênero do Filme:").toLowerCase();
const ticketPrice = Number(prompt("Preço do Ingresso:"));

if (newMovieGenre == 'fantasia' && ticketPrice < 15){

    const snackChoice = prompt("Qual snack que você quer comprar?")

    console.log(`Bom filme!\nAproveite o seu ${snackChoice}`)
}
else {
    console.log("Escolha outro filme :(")
}

// /*2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
//     - Nome completo;
//     - Tipo de jogo: IN indica internacional; e DO indica doméstico;
//     - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
//     - Categoria: pode ser as opções 1, 2, 3 ou 4;
//     - Quantidade de ingressos
    
//     O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
    
//     - Tabela de Preços
        
//         ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd2f55f6-e07f-45fd-9b65-ecf0343a3b3c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd2f55f6-e07f-45fd-9b65-ecf0343a3b3c/Untitled.png)
        
//     - Exemplo de saída: Jogo Nacional
        
//         ```
//         ---Dados da compra--- 
//         Nome do cliente:  Soter Padua 
//         Tipo do jogo:  Nacional 
//         Etapa do jogo:  Final 
//         Categoria:  1 
//         Quantidade de Ingressos:  10 ingressos 
//         ---Valores--- 
//         Valor do ingresso:  R$ 1980
//         Valor total:  R$ 19800
        
//         ```
        
//     - Exemplo de saída: Jogo Internacional
// */


let gameTicket = {
    nome: prompt("Nome Completo:"),
    tipoDeJogo: prompt("Tipo de jogo:").toUpperCase(),
    etapaDoJogo: prompt("Etapa do jogo:").toUpperCase(),
    categoria: Number(prompt("Categoria:")),
    quantidade: Number(prompt("Quantidade")),
    valorIngresso: 0,
    finalPrice: 0
}


function ticketCalculator(){
    
    if (gameTicket.tipoDeJogo = "DO"){
        gameTicket.tipoDeJogo = "Doméstico"
        if (gameTicket.etapaDoJogo = "SF"){
            gameTicket.etapaDoJogo = "Semi-Final"
            if (gameTicket.categoria == 1){
                gameTicket.valorIngresso = 1320
                gameTicket.finalPrice = gameTicket.valorIngresso * gameTicket.quantidade
            }
            else if (gameTicket.categoria == 2){
                gameTicket.valorIngresso = 880
                gameTicket.finalPrice = gameTicket.valorIngresso * gameTicket.quantidade
            }
            else if (gameTicket.categoria == 3){
                gameTicket.valorIngresso = 550
                gameTicket.finalPrice = gameTicket.valorIngresso * gameTicket.quantidade
            }
            else if (gameTicket.categoria == 4){
                gameTicket.valorIngresso = 220
                gameTicket.finalPrice = gameTicket.valorIngresso * gameTicket.quantidade
            }
        else if (gameTicket.etapaDoJogo = "DT"){
            gameTicket.etapaDoJogo = "Decisão de terceiro lugar"
            
        }
        }
    }

    const ticketFinalPrint = console.log(`---Dados da Compra---\nNome do Cliente: ${gameTicket.nome}\nTipo de Jogo: ${gameTicket.tipoDeJogo}\nEtapa do Jogo: ${gameTicket.etapaDoJogo}\nCategoria: ${gameTicket.categoria}\nQuantidade de Ingressos: ${gameTicket.quantidade}\n---Valores---\nValor do Ingresso: RS ${gameTicket.valorIngresso}\nValor Total:${gameTicket.finalPrice}`)
    return ticketFinalPrint
}
ticketCalculator()


