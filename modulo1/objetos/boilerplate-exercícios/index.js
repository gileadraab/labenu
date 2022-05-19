/*Exercícios de interpretação de código:
1.  Leia o código abaixo
a) O que vai ser impresso no console?
R: Matheus Nachtergale, Virginia Cavendish, {canal: "Globo", horario: "14h"}

2. Leia o código abaixo
a) O que vai ser impresso no console?
R: {nome: Juca, idade: 3, raca: SRD}
   {nome: Juba, idade: 3, raca: SRD}
   {nome: jubo, idade: 3, raca: SRD}

b: cria uma cópia do objeto que pode ser alterada

3. Leia o código abaixo
a) O que vai ser impresso no console?
R: False, undefined

b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
R: o valor é undefined pois não foi atribuida a chave "altura" no objeto
*/


/*Exercícios de escrita de código:
1. Resolva os passos a seguir:
a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:
*/
const pessoa = {
    nome: "Gilead",
    apelidos: ["Gil", "Gile", "Gilete"]
}

function apelido(user) {
    return console.log(`Eu sou ${user.nome}, mas pode me chamar de: ${user.apelidos[0]}, ${user.apelidos[1]} ou ${user.apelidos[2]}`
    )
}

apelido(pessoa)

/*b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto
*/
const novosApelidos = {
    ...pessoa,
    apelidos: ["Gilezão", "Gilezinho", "Gile de novo"]
}
apelido(novosApelidos)


/*
2. Resolva os passos a seguir:
a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
*/
const userData = {
    name: "Gilead",
    age: 30,
    occupation: "estudante"
}

const newUserData = {
    name: "João",
    age: 40,
    occupation: "Lawyer"
}

/*
b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão`
*/
function userInfo(userName){
    const userDataArray = [userName.name, userName.name.length, userName.age, userName.occupation, userName.occupation.length]
    return console.log(userDataArray)
}
userInfo(userData)


/*
3. Resolva os passos a seguir: 
a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho
*/
let carrinho = []

/*
b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)
*/
const laranja = {
    nome: "Laranja",
    disponibilidade: true
}

const uva = {
    nome: "Uva",
    disponibilidade: true
}

const banana = {
    nome: "Banana",
    disponibilidade: true
}

/*
c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 
*/
function fruitAvailability(fruit){
    carrinho.push(fruit.nome)
    return carrinho
}
fruitAvailability(laranja)
fruitAvailability(uva)
fruitAvailability(banana)

/*
d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 
*/
carrinho = [
    laranja,
    uva,
    banana
]
console.log(carrinho)


/*Desafios

1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.
*/
function dadosUsuario(){ 
    const userName = prompt("Nome:")
    const userAge = prompt("Idade:")
    const userOccupation = prompt("Profissão:")

    dataUser = {
    nome: userName,
    idade: userAge,
    profissão: userOccupation
    }
    
}
dadosUsuario()

console.log(dataUser)
console.log(typeof dataUser)


/*
2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:
O primeiro filme foi lançado antes do segundo? false
O primeiro filme foi lançado no mesmo ano do segundo? true
*/
const harryPotter = {
    name: "Harry Potter",
    year: 2001
}

const loth = {
    name: "Lorde of the Rings",
    year: 2001
}

function movies(movie1, movie2){
    const releasedBefore = movie1.year < movie2.year
    const releasedSameYear = movie1.year == movie2.year

    console.log(`O primeiro filme foi lançado antes do segundo? ${releasedBefore}\nO primeiro filme foi lançado no mesmo ano do segundo? ${releasedSameYear}`)
    return
}
movies(harryPotter, loth)


/*
3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade disponisbilidade com o valor invertido.
*/
function reverseAvailability(fruit){
    const newAvailability = {
    ...fruit,
    disponibilidade: !fruit.disponibilidade
    }

    return console.log(newAvailability)
}
reverseAvailability(uva)