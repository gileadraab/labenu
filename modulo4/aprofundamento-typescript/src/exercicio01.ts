//1.
//a) const minhaString: string = 5
//Type 'number' is not assignable to type 'string'.

//b) const meuNumero: number | string = "myVar"

//c)
enum FavoriteColor {
  RED = "vermelho",
  ORANGE = "laranja",
  YELLOW = "amarelo",
  GREEN = "verde",
  BLUE = "azul",
  INDIGO = "anil",
  VIOLET = "violeta"
}

type Person = {
  name: string,
  age: number,
  favoriteColor: FavoriteColor
}

const person1: Person = {
  name: "Gilead",
  age: 30,
  favoriteColor: FavoriteColor.RED
}

const person2: Person = {
  name: "João",
  age: 20,
  favoriteColor: FavoriteColor.BLUE
}

const person3: Person = {
  name: "Ana",
  age: 10,
  favoriteColor: FavoriteColor.INDIGO
}

const persons: Person[] = [person1, person2, person3]

console.table(persons)



