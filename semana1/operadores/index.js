/*  Exercicios de Interpretação
1)
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

resposta:
a. false
b. false
c. true
d. boolean
-----------------------------------------------------------------------------------
2) 
seria impresso a variavel primeiroNumero concatenada com a variavel segundoNumero
-----------------------------------------------------------------------------------
3)
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

---------------------------------------------------------------------------------
Exercícios de escrita de código
1)
*/
const idadeUsuario = Number(prompt("Qual a sua idade?"))
const idadeMelhorAmigo = Number(prompt("Qual a idade da seu(ua) melhor amigo(a)?"))
console.log("A Sua idade é maior do que a do seu(ua) melhor amigo(a)? ", (idadeUsuario > idadeMelhorAmigo))
console.log("A diferença entre a idade de vocês é: ", (idadeUsuario - idadeMelhorAmigo))

/*-------------------------------------------------------------------------------
2)
*/
const numeroPar = Number(prompt("Insira um número par: "))
console.log("O resto da divisão é: ",numeroPar%2)
/*Quando é número par, o resto da divisão é 0, quando é número impar, o resto da divisão é 1.
--------------------------------------------------------------------------------
3)
*/
const idadeEmAnos = Number(prompt("Qual a sua idade em anos?"))
console.log("A sua idade em meses é: ", (idadeEmAnos*12))
console.log("A sua idade em dias é: ", (idadeEmAnos*365))
comsole.log("A suas idade em horas é: ", (idadeEmAnos*365*24))
/*------------------------------------------------------------------------------
4)
*/
const numero1 = Number(prompt("Insira o primeiro numero: "))
const numero2 = Number(prompt("Insira o segundo numero: "))
console.log("O primeiro numero é maior que segundo? ", numero1>numero2)
console.log("O primeiro numero é igual ao segundo? ", numero1 === numero2)
console.log("O primeiro numero é divisível pelo segundo? ", (numero1%numero2) ===0)
console.log("O segundo numero é divisível pelo primeiro? ", (numero2%numero1) ===0)
/*------------------------------------------------------------------------------
DESAFIO
1)
*/
let kelvin = 0
let fahrenheit = 0
let celsios = 0

//resultadoKelvin = (fahrenheit - 32)*(5/9) + 273.15
//resultadoFahrenheit = celsios*(9/5) + 32

fahrenheit = 77
resultadoKelvin = (fahrenheit - 32)*(5/9) + 273.15
console.log(fahrenheit," ºF = ", resultadoKelvin, " ºC")

celsios = 80
resultadoFahrenheit = celsios*(9/5) + 32
console.log(celsios, " ºC = ", resultadoFahrenheit, " ºF")

celsios = 30
resultadoFahrenheit = celsios*(9/5) + 32
console.log( celsios, " ºC = ", resultadoFahrenheit, " ºF")
resultadoKelvin = (resultadoFahrenheit - 32)*(5/9) + 273.15
console.log(celsios," ºC = ", resultadoKelvin, " ºC")
/*---------------------------------------------------------------------------------
2)
*/
const consumo = Number(prompt("Insira seu consumo em quilowatt-hora: "))
alert("O valor a ser pago é de: R$ " + (consumo*0.05))
const desconto = Number(prompt("Insira o desconto recebido: "))
alert("O valor a ser pago com desconto é de: R$ "+ (consumo*0.05*0.85))
 /*---------------------------------------------------------------------------------
3)
*/
let libra = Number(prompt("Insira o valor da unidade em libras para converter em kg"))
console.log("20lb equivalem a", (libra*0.453592), " kg")
let onca = 10
console.log("10.5 oz equivalem a",(onca*0.0283495) ," kg")
let milha = 100
console.log("100mi equivalem a", (milha*1609.34)," m")
let pes = 50
console.log("50ft equivalem a ", (pes*0.3048)," m")
let galao = 103.54
console.log("103.56gal equivalem a ", (galao*3.78541) ," l")
let xicara = 450
console.log("450 xic equivalem a", xicara*0.284131, " l")