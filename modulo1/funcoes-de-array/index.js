/*Exercícios de interpretação de código
1.  Leia o código abaixo:
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})

a) O que vai ser impresso no console?
R: serão impressos: o item do array, seus índices seguidos e o array completo]


2. Leia o código abaixo:
a) O que vai ser impresso no console?
R: Imprimira um novo array com os objetos que não contenham o apelido: "Chijo"
*/


/*Exercícios de escrita de código
1.Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
*/
const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]
/*
a) Crie um novo array que contenha apenas o nome dos doguinhos
*/
const dogNames = pets.map((names) => {
  return names.nome
})
console.log (dogNames)

/*
b) Crie um novo array apenas com os cachorros salsicha
*/
const dogSalsicha = pets.filter((names) => {
  return names.raca == "Salsicha"
})
console.log(dogSalsicha)

/*
c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
*/
const dogPoodle = pets.filter((names) => { 
  return names.raca == "Poodle"
})
const dogCoupon = dogPoodle.map((names) => {
  return `Você ganhou um cupom de desconto de 10% para tosar o/a ${names.nome}!`
})
console.log(dogCoupon)


/*
2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
*/
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a) Crie um novo array que contenha apenas o nome de cada item
const productsNames = produtos.map((names) => {
  return names.nome
})
console.log(productsNames)

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
const changeProduts = produtos.map((names) => {
  newNames = names.nome
  newPrice = (names.preco - (names.preco * 5 / 100)).toFixed(2)
  producsWithDiscount = {
    nome: newNames,
    preco: newPrice
  }
  
  console.log(producsWithDiscount)
})

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const onlyDrinks = produtos.filter((names) => {
  return names.categoria == "Bebidas"
})
console.log(onlyDrinks)

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const onlyYpe = produtos.filter((names) => {
  return names.nome.includes("Ypê")
})
console.log(onlyYpe)

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
const buyYpe = onlyYpe.map((names) => {
  return `Compre ${names.nome} por ${names.preco}`
})
console.log(buyYpe)

/*
DESAFIOS

1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:
*/
const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
]
//a) Crie um novo array que contenha apenas o nome dos pokémons em **ordem alfabética**
const alphabeticPokemons = pokemons.map((names) => {
  return names.nome
})
console.log(alphabeticPokemons.sort())

//b) Crie um novo array apenas com os tipos dos pokémons, **sem repetição**
let pokemonClasses = pokemons.map((names)=> {
  return names.tipo
})
pokemonClasses = [...new Set(pokemonClasses)]
console.log(pokemonClasses)