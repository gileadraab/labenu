/* Exercícios de interpretação de código

1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
R: a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

2. SUBI NUM ONIBUS EM MIRROCOS 27
*/


/* Exercícios de escrita de código

1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
"O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!""
*/
const userName = prompt("Nome:");
const userEmail = prompt("E-mail:");

const messageSuccess = `O e-mail ${userEmail} foi cadastrado com sucesso. Seja bem-vinda(o), ${userName}!`;

console.log(messageSuccess);


/*
2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
a) Imprima no console o array completo
b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista
*/
const favoriteFoods = ["Pizza", "Lasagna", "Sorvete", "Churrasco", "Macarrão"];

console.log(favoriteFoods);
console.log(`Essas são as minhas comidas preferidas:\n${favoriteFoods}`);

const userFavorite = prompt("Qual a sua comida preferida:");
favoriteFoods[1] = userFavorite;
console.log(favoriteFoods);


/*
3. Faça um programa, seguindo os passos:
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
c) Imprima o array no console
d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
e) Remova da lista o item de índice que o usuário escolheu.
f) Imprima o array no console
*/
const listaDeTarefas = [];
const taskOne = prompt("Informe uma tarefa que você precise realizar hoje:");
const taskTwo = prompt("Informe mais uma tarefa:");
const taskThree = prompt("Informe uma terceira tarefa:");

listaDeTarefas.push(taskOne, taskTwo, taskThree);
console.log(listaDeTarefas);

const taskIndice = Number(prompt("Digite o índice de uma tarefa que você ja realizou (0, 1 ou 2):"));
const updatedTasks = listaDeTarefas.splice(taskIndice, 1);
console.log(listaDeTarefas); 


/*Desafios:
1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
*/
const arraySentence = prompt("Digite uma frase:").split(" ");
console.log(arraySentence);

/*
2. Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array
*/
const fruitsArray = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
const abacaxiIndex = fruitsArray.indexOf("Abacaxi");

console.log(abacaxiIndex, fruitsArray.length);