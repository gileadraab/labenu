/*
EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
R: Sera impresso primeiramente 10, depois 10 e 5

2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
R: Sera impresso o número 10 3 vezes

3. Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.
R: p poderia se chamar hoursDay e t poderia se chamar payDay

*/


//EXERCÍCIO 1 
let myName
let myAge
console.log (typeof myName, myAge)
// esse programa printará undefined 2 vezes pois ainda nao foi atribuido valor às variáveis

myName = prompt("Qual seu nome?")
myAge = prompt("Qual sua idade?")

console.log(typeof myName, typeof myAge)
// Agora o tipo das variáveis será string pois o valor atribuido a elas após o prompt é de strings

console.log ("Olá", myName, "você tem", myAge, "anos.")


//EXERCÍCIO 2
let hadLunch = prompt("Você ja almoçou hoje?") 
let hadClass = prompt ("Você já teve aula hoje?") 
let enjoyCoding = prompt ("Você gosta de programar?")

console.log ("Você ja almoçou hoje?", hadLunch, "Você já teve aula hoje?", hadClass, "Você gosta de programar?", enjoyCoding)


//EXERCÍCIO 3
let a = 10
let b = 25
let c = a
a = b
b = c

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b) 




