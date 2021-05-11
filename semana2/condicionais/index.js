/* Exercicios de Interpretação de codigo
1)

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
a) Explique o que o código faz. Qual o teste que ele realiza? 
ele recebe um número e verifica se o resto da divisão desse numero por dois é igual a 0

b) Para que tipos de números ele imprime no console "Passou no teste"? 
Numeros inteiros pares

c) Para que tipos de números a mensagem é "Não passou no teste"?
Numeros inteiros impares

-----------------------------------------------------------------------------------------
2)
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) Para que serve o código acima?
Para informar o preço de cada fruta, de acordo com que o usuário informar
b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
O preço da fruta Maçã é R$ 2.25
c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem 
impressa no console se retirássemos o `break` que está logo acima do `default`
(o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
O preço da fruta Pêra é R$ 5
-----------------------------------------------------------------------------------------
3)
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
a) O que a primeira linha está fazendo?
Está recebendo um número em string e convertendo para tipo numero
b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
O código não irá rodar, porque dará erro por causa da variável mensagem que esta dentro do If
c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
O código não irá rodar, porque dará erro por causa da variável mensagem que esta dentro do bloco do if

----------------------------------------------------------------------------------------------------------
Exercícios de escrita de código
1)
*/
const age = Number(prompt("Qual a sua idade?"))

if(age >= 18){
    console.log("Você pode dirigir")
}else{
    console.log("Você não pode dirigir")
}

/*
---------------------------------------------------------------------------------------------------------
2)
*/
const turno = prompt("Em que turno você estuda\nM - matutino\nV - Vespertino\nN - Noturno").toUpperCase()

if(turno === "M"){
    console.log("Bom Dia!")
}else if (turno === "V"){
    console.log("Boa Tarde!")
}else if (turno === "N"){
    console.log("Boa Noite!")
}else{
    console.log("Coloque M,V ou N")
}

/*
---------------------------------------------------------------------------------------------------------
3)
*/
const turno = prompt("Em que turno você estuda\nM - matutino\nV - Vespertino\nN - Noturno").toUpperCase()

switch(turno){
    case "M":
        console.log("Bom Dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break
    default:
        console.log("Coloque M,V ou N")
}
/*
---------------------------------------------------------------------------------------------------------
4)
*/
const genre = prompt("Qual o genero do filme?").toLowerCase()
const price = Number(prompt("Qual o preço do ingresso?"))

if( genre === "fantasia" && price <=15){
    console.log("Bom Filme!")
}else{
    console.log("Escolha outro filme")
}
/*
---------------------------------------------------------------------------------------------------------
DESAFIO
1)
*/
const genre = prompt("Qual o genero do filme?").toLowerCase()
const price = Number(prompt("Qual o preço do ingresso?"))
const snack = prompt("Qual lanche você vai comprar?")

if( genre === "fantasia" && price <=15){
    console.log(`Bom Filme!\nAproveite o seu ${snack}`)
}else{
    console.log("Escolha outro filme")
}
/*
---------------------------------------------------------------------------------------------------------
2)
*/
function informationTicketValue(gameStep, category){

    if(gameStep === "SF"){
        switch(category){
            case 1:
                return 1320
            case 2:
                return 880
            case 3:
                return 550
            case 4:
                return 220
            default:
                return "Error"
        }
    }

    if(gameStep === "DT"){
        switch(category){
            case 1:
                return 660
            case 2:
                return 440
            case 3:
                return 330
            case 4:
                return 170
            default:
                return "Error"
        }
    }

    if(gameStep === "FI"){
        switch(category){
            case 1:
                return 1980
            case 2:
                return 1320
            case 3:
                return 880
            case 4:
                return 130
            default:
                return "Error"
        }
    }

}

function informationTypeOfGame(typeOfGame){
    if(typeOfGame === "IN"){
        return "Internacional"
    }else if(typeOfGame === "DO"){
        return "Nacional"
    }else{
        return "Error"
    }
}

function informationGameStep(gameStep){
    if(gameStep === "SF"){
        return "semi-final"
    }else if(gameStep === "DT"){
        return "Terceiro Lugar"
    }else if( gameStep === "FI"){
        return "Final"
    }else{
        return "Error"
    }
}

const name = prompt("Qual o seu nome completo?")
const typeOfGame = prompt("Indique o tipo do jogo:\nIN - Internacional\nDO - Doméstico").toUpperCase()
const gameStep = prompt("Indique a etapa:\nSF - semi-final\nDT - 3º lugar\nFI - Final")
const category = Number(prompt("De qual categoria (1,2,3 ou 4)?"))
const numberOfTickets = Number(prompt("Quantos Ingressos você irá comprar?"))



console.log(`----Dados da compra ----
Nome do cliente: ${name}
Tipo do jogo: ${informationTypeOfGame(typeOfGame)}
Etapa do Jogo: ${informationGameStep(gameStep)}
categoria: ${category}
Quantidade de Ingressos: ${numberOfTickets}
----Dados da compra ----
`)
if (typeOfGame === "DO"){
    console.log(`Valor do ingresso: R$  ${informationTicketValue(gameStep, category)}
    Valor Total: R$ ${informationTicketValue(gameStep, category)*numberOfTickets}`)
}else if (typeOfGame === "IN"){
    console.log(`Valor do ingresso: U$  ${informationTicketValue(gameStep, category)/4}
    Valor Total: U$ ${informationTicketValue(gameStep, category)*numberOfTickets/4}`)
}