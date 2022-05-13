// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const retHeigth = Number(prompt("Altura:"));
  const retWidth = Number(prompt("Largura:"));

  const areaRetangulo = retHeigth * retWidth;

  return console.log(areaRetangulo);
}

// EXERCÍCIO 02
function imprimeIdade() {
  const thisYear = Number(prompt("Ano atual:"));
  const yearBorn = Number(prompt("Ano do nascimento:"));

  const userAge = thisYear - yearBorn;

  return console.log(userAge);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imcValue = peso / (altura * altura);

  return imcValue;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const userName = prompt("Nome:");
  const userAge = prompt("Idade:");
  const userEmail = prompt ("E-mail");
  
  const userInfo = console.log(`Meu nome é ${userName}, tenho ${userAge} anos, e o meu email é ${userEmail}.`);

  return userInfo;
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const color1 = prompt("Cor 1:");
  const color2 = prompt("Cor 2:");
  const color3 = prompt("Cor 3");

  const favoriteColors = [color1, color2, color3];

  return console.log(favoriteColors);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringToUpper = string.toUpperCase();

  return stringToUpper;
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const minimunSale = custo / valorIngresso;

  return minimunSale;

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const stringSizeComparer = string1.length == string2.length;

  return stringSizeComparer;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const firstElement = array[0];

  return firstElement;
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const lastElement = array[array.length - 1];

  return lastElement;
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const arraySwapper = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = arraySwapper;

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const isWordTheSame = string1.toLowerCase() == string2.toLowerCase();

  return isWordTheSame
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const thisYear = Number(prompt("Ano atual:"));
  const yearBorn = Number(prompt("Ano de nascimento:"));
  const idEmission = Number(prompt("Ano de emissao do RG:"));

  const ageUser = thisYear - yearBorn;
  const timeSinceEmission = thisYear - idEmission;

  const twentyOrLess = ageUser <= 20 && timeSinceEmission >= 5;
  const twentyToFifty = ageUser > 20 && ageUser <= 50 && timeSinceEmission >= 10;
  const moreThanFifty = ageUser > 50 && timeSinceEmission >= 15;

  const shouldIRenew = twentyOrLess || twentyToFifty || moreThanFifty;

  return console.log(shouldIRenew);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const ageUser = prompt("Você tem mais de 18 anos?");
  const schoolingUser = prompt("Você possui ensino médio completo?");
  const availableTimeUser = prompt("Você possui disponibilidade exclusiva durante os horários do curso?");

  const validApplication = ageUser.toLowerCase() == "sim" && schoolingUser.toLocaleLowerCase() == "sim" && availableTimeUser.toLowerCase() == "sim";

  return console.log(validApplication);
}