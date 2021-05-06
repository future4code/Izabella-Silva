/*Exercícios de interpretação de código
1)
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) resposta:
10
50
b) resposta: não retornaria nada

-------------------------------------------------------------------------
2)
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a)A função transforma rodo o texto em letras minusculas e depois verifica se há a palavra cenoura na frase, retornando true ou false
A utilidade dela é para não reutilização
b) true
true
true
---------------------------------------------------------------------------------------------------
Exercícios de escrita de código
1)
*/
function printFrase(){
    console.log("Eu sou Izabella, tenho 29 anos, moro em Bocaiúva e sou estudante.")
}

printFrase()

function printUserData(name, age, adress, profession){
    const userData = `Eu sou ${name}, tenho ${age} anos, moro em ${adress} e sou ${profession}.`
    return userData
}

const name = prompt("Qual seu nome?")
const age = Number(prompt("Qual a sua idade?"))
const adress = prompt("Qual o seu endereço?")
const profession = prompt("Qual a sua profissão?")

printUserData(console.log(name, age, adress, profession))

/*-------------------------------------------------------------------------------------------------
2)
*/

function sum(number1, number2){
    return number1+number2
}

function toCompareNumbers(number1, number2){
    return (number1 > number2 || number1 === number2)
}

function checkPair(numberPair){
    return (numberPair%2 === 0)
}
function checkMessage(message){
    const newMessage = message.toLowerCase()
    console.log(newMessage, `\nTamanho da mensagem: ${message.length}`)
}

const number1 = Number(prompt("Insira o primeiro numero:"))
const number2 = Number(prompt("Insira o segundo numero:"))

console.log("A soma dos dois número é: ",sum(number1,number2))
console.log("O primeiro número é maior ou igual ao segundo número?", toCompareNumbers(number1, number2))

const numberPair = Number(prompt("Informe um numero"))
console.log(`O numero ${numberPair} é par? `, checkPair(numberPair))

const message = prompt("Insira uma mensagem: ")
checkMessage(message)

/*-------------------------------------------------------------------------------------------------
3)
*/
function toSumNumbers(number1, number2){
    return number1 + number2
}

function toSubtractNumbers(number1, number2){
    return number1 - number2
}

function multiplyNumbers(number1, number2){
    return number1 * number2
}

function splitNumbers(number1, number2){
    return number1 / number2
}

const num1 = Number(prompt("Insira o primeiro numero"))
const num2 = Number(prompt("Insira o segundo numero"))

const sumNumbers = toSumNumbers(num1,num2)
const subtractNumbers = toSubtractNumbers(num1,num2)
const multiplication = multiplyNumbers(num1,num2)
const division = splitNumbers(num1, num2)

console.log(`Numero Inseridos: ${num1} e ${num2} \nSoma: ${sumNumbers}\nSubtração: ${subtractNumbers}\nMultiplicação: ${multiplication}\nDivisão: ${division}`)

/*--------------------------------------------------------------------------------------------------------------
DESAFIO
1)
*/
const value = number => {
    console.log(number)
}

const toSum = (number1, number2) => {
    const sum = number1 + number2
    value(sum)
}

const firstNumber = Number(prompt("Insira o primeiro número: "))
const secondNumber = Number(prompt("Insira o segundo número: "))

toSum(firstNumber, secondNumber)
/*--------------------------------------------------------------------------------------------------------------
2)
*/
const hypotenuse = (leg1, leg2) => {
    return Math.sqrt(Math.pow(leg1,2) + Math.pow(leg2,2))
}

const leg1 = Number(prompt("Insira o valor do primeiro cateto"))
const leg2 = Number(prompt("Insira o valor do segundo cateto"))
console.log(`O valor da hipotenusa é: ${hypotenuse(leg1,leg2)}` )