// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
   // implemente sua lógica aqui
   const heightRectangle = Number(prompt("Informe a altura do triangulo em centímetros"))
   const widthRectangle = Number(prompt("Informa a largura do retângulo em centímetros"))
   const area = heightRectangle*widthRectangle
   console.log(area)
}
//Teste
// calculaAreaRetangulo()

//Exercício 2

function imprimeIdade() {
   // implemente sua lógica aqui
   const currentYear = Number(prompt("Informe o ano atual"))
   const yearsOfBirth = Number(prompt("Informe seu ano de nascimento"))
   const age = currentYear - yearsOfBirth
   console.log(age)
}
//Teste
// imprimeIdade()

//Exercício 3

function calculaIMC(peso, altura) {
   // implemente sua lógica aqui
   const imc = peso/Math.pow(altura,2)
   return imc
}

//Exercício 4

function imprimeInformacoesUsuario() {
   // implemente sua lógica aqui
   const userName = prompt("Qual o seu nome?")
   const userAge = Number(prompt("Qual a sua idade?"))
   const userEmail = prompt("Qual o seu peso em kg?")

   console.log(`Meu nome é ${userName}, tenho ${userAge} anos, e o meu email é ${userEmail}.`)
}

//Exercício 5

function imprimeTresCoresFavoritas() {
   // implemente sua lógica aqui
   const favoriteColors = []
   const userColors1 = prompt("Insira suas três cores favoritas separadas por virgula\n cor1")
   const userColors2 = prompt("cor2")
   const userColors3 = prompt("cor3")
   favoriteColors.push(userColors1, userColors2, userColors3)
   console.log(favoriteColors)
}

//Teste
// imprimeTresCoresFavoritas()

//Exercício 6

function retornaStringEmMaiuscula(string) {
   // implemente sua lógica aqui
   const newString = string.toUpperCase()
   return newString
}
//Teste
// const string = "oi"
// console.log(retornaStringEmMaiuscula(string))

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
   // implemente sua lógica aqui
   const valorMinVenda = Math.ceil(custo/valorIngresso)
   return valorMinVenda
}
//Teste
// const custo = 3000
// const valorIngresso = 100
// console.log(calculaIngressosEspetaculo(custo, valorIngresso))

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return (string1.length === string2.length)
}
//Teste
// const string1 = "ola"
// const string2 = "abcd"
// console.log(checaStringsMesmoTamanho(string1, string2))

// Exercício 9

function retornaPrimeiroElemento(array) {
   // implemente sua lógica aqui
   return array[0]
}
//Teste
// const array = [1, 2, 3]
// console.log(retornaPrimeiroElemento(array))

// Exercício 10

function retornaUltimoElemento(array) {
   // implemente sua lógica aqui
   return array[array.length-1]
}
//Teste
// const array = [1, 2, 3, 4, 5]
// console.log(retornaUltimoElemento(array))

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   // implemente sua lógica aqui
   let aux = 0
   aux = array[0]
   array[0] = array[array.length-1]
   array[array.length-1] = aux
   return array
}
//Teste
// const array = [1, 2, 3, 4, 5]
// console.log(trocaPrimeiroEUltimo(array))

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   // implemente sua lógica aqui
   const newString1 = string1.toLowerCase()
    const newString2 = string2.toLowerCase()
    return newString1 === newString2
}
//Teste
// const string1 = "banana"
// const string2 = "bananinha"
// console.log(checaIgualdadeDesconsiderandoCase(string1, string2))

// Exercício 13

function checaRenovacaoRG() {
   // implemente sua lógica aqui
   const currentYear = Number(prompt("Informe o ano atual"))
   const yearsOfBirth = Number(prompt("Informe seu ano de nascimento"))
   const yearOfIdentifyCard = Number(prompt("Que ano sua carteira de identidade foi emitida?"))
   const ageUser = currentYear - yearsOfBirth
   const ageIdenditifyCard = currentYear - yearOfIdentifyCard
   const result = (ageUser < 21 && ageIdenditifyCard > 4) || ((ageUser > 20 && ageUser < 50) && ageIdenditifyCard > 9) || (ageUser > 49 && ageIdenditifyCard > 14)
   console.log(result)
}
//Teste
// checaRenovacaoRG()

// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
   const result = (ano % 400 === 0) || ((ano % 4 === 0) && !(ano % 100 === 0))
   return result
}

// Exercício 15

function checaValidadeInscricaoLabenu() {
   // implemente sua lógica aqui
   const age = prompt("Você tem mais de 18 anos?").toLowerCase()
   const education = prompt("Você possui ensino médio completo?").toLowerCase()
   const avaliability = prompt("Você possui disponibilidade exclusiva durante os horários do curso?").toLowerCase()
   const result = (age === "sim") && (education === "sim") &&(avaliability === "sim")
   console.log(result)
}