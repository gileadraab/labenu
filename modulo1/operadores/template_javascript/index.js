/*Exercícios de interpretação de código:

1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
R: a. false, b. false, c. true, d. boolean 

2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 
R: Os valores informados ao prompt serao lidos como strings por isso o programa não será capaz de fazer a operação matemática e interpretara o "+" como a junção das 2 strings. Serao impressos os 2 valores lado a lado

3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.
R: 
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma) 
*/


/* Exercícios de escrita de código:

1. Faça um programa que:
    
    a) Pergunte a idade do usuário
    
    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
*/

let ageUser = Number(prompt("Qual a sua idade?"));
let ageFriend = Number(prompt("Qual a idade do seu melhor amigio(a)?"));

const isOlder = ageUser > ageFriend;
const ageDiff = ageUser - ageFriend;

console.log("Sua idade é maior do que a do seu melhor amigo?", isOlder);
console.log("A diferença de idade é:", ageDiff, "anos");


/*
2. Faça um programa que:
    
    a) Peça ao usuário que insira um número **par**
    
    b) Imprima na console **o resto da divisão** desse número por 2.
    
    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    
    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
*/

let evenNumber = Number(prompt("Insira um número par:"));
const divRest = evenNumber % 2;

console.log("O resto da divisão é", divRest);

// c) o resto da divisão de qualquer número par por 2 será 0

// d) Se o usuário inserir um número ímpar o resto será um número diferente de 0


/*
3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    a) A idade do usuário em meses
    
    b) A idade do usuário em dias
    
    c) A idade do usuário em horas
*/
let userAge = Number(prompt("Qual a sua idade (em anos)?"));
const ageMonths = userAge * 12;
const ageDays = userAge * 365;
const ageHours = ageDays * 24;

console.log("Sua idade é:", userAge, "anos. Isso é o equivalente a:", ageMonths, "meses,", ageDays, "dias ou", ageHours, "horas.");


/*
4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações.
*/

let firstNumber = Number(prompt("Insira um número:"));
let secondNumber = Number(prompt("Insira outro número:"));

const isHigher = firstNumber > secondNumber;
const isEqual = firstNumber == secondNumber;
const isFirstDivisible = (firstNumber % secondNumber) == 0;
const isSecondDivisible =  (secondNumber % firstNumber) == 0;


console.log ("O primeiro numero é maior que segundo?", isHigher);
console.log ("O primeiro numero é igual ao segundo?", isEqual);
console.log ("O primeiro numero é divisível pelo segundo?", isFirstDivisible);
console.log ("O segundo numero é divisível pelo primeiro?", isSecondDivisible);


