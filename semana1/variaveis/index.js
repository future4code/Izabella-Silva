/*
    Exercícios de interpretação de código
1)
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
Resposta:
10
10 5
---------------------------------------------------------------------------------------------------------------
2)
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
resposta:
10 10 10
---------------------------------------------------------------------------------------------------------------
3)
let horasDiariasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let recebimentoDiario = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${recebimentoDiario/horasDiariasTrabalhadas} por hora`)

---------------------------------------------------------------------------------------------------------------

Exercícios de escrita de código

1)
let nome
let idade
alert("O tipo da variavel nome é " + typeof(nome) + " e o tipo da variavel idade é " + typeof(idade))

O tipo das variáveis forma underfined porque a variável não foi definida
*/
let nome = prompt("Qual o seu nome?")
let idade = prompt("Qual a sua idade?")

alert("O tipo da variavel nome é " + typeof(nome) + " e o tipo da variavel idade é " + typeof(idade))

alert("Olá "+ nome + " você tem " + idade + " anos.")
/* as duas variáveis recebem um tipo string porque o prompt sempre recebe uma string
---------------------------------------------------------------------------------------------------------------
2)*/
let resposta1 = prompt("Você usa roupa azul?")
let resposta2 = prompt("Você é estudante?")
let resposta3 = prompt("Você tem uma bicicleta?")

alert("Você usa roupa azul? " + resposta1)
alert("Você é estudante? " + resposta2)
alert("Você tem uma bicicleta? " + resposta3)
/*
---------------------------------------------------------------------------------------------------------------
3)*/
let a = 10
let b = 25
let aux = 10

a = b
b = aux

console.log ("O valor de a é :", a,"O valor de b é: ", b)
/*
---------------------------------------------------------------------------------------------------------------
DESAFIO*/

let numero1 = Number(prompt("Digite o primeiro numero: "))
let numero2 = Number(prompt("Digite o segundo numero: "))

alert("A soma dos dois numeros é: " + (numero1+numero2))
alert("A multiplicação dos dois numeros é: " + (numero1*numero2))
