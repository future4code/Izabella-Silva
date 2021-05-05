/* Exercícios de interpretação de código
1)
let array
console.log('a. ', array)
resposta: a. uderfined

array = null
console.log('b. ', array)
resposta: b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
resposta: c. 11

let i = 0
console.log('d. ', array[i])
resposta: d. 3

array[i+1] = 19
console.log('e. ', array)
resposta: e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)
resposta: f. 9
------------------------------------------------------------------
2)
const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

resposta: SUBI NUM ONIBUS EM MIRROCOS 27
-------------------------------------------------------------------
Exercicio de escrita de código
1)
*/
const userName = prompt("Qual o seu nome?")
const userEmail = prompt("Qual o seu e-mail?")

const frase = `O e-mail ${userEmail} foi cadastrado com sucesso. Seja bem-vinda(o), ${userName}`
alert(frase)

/*-------------------------------------------------------------------------------------------------
2)
*/

const favoriteFood = ["açaí", "grao de bico", "salada", "quibe de soja", "empada de palmito"]
alert(`Essas são as minhas comidas preferidas: \n ${favoriteFood[0]} \n ${favoriteFood[1]} \n ${favoriteFood[2]} \n ${favoriteFood[3]} \n ${favoriteFood[4]}` )
const usersFavoriteFood = prompt("Qual a sua comida favorita")
favoriteFood[1] =  usersFavoriteFood
alert(`Nova Lista de comidas favoritas ${favoriteFood}`)

/*----------------------------------------------------------------------------------------------------
3)
*/
const taskList = []
const task1 = prompt("Insira a tarefa 1: ")
const task2 = prompt("Insira a tarefa 2: ")
const task3 = prompt("Insira a tarefa 3: ")
taskList.push(task1,task2,task3)
alert(taskList)
const index = Number(prompt("Insira a posição do item que você quer que delete"))
taskList.pop(taskList[index])
alert(taskList)

/*----------------------------------------------------------------------------------------------------
DESAFIO
1)
*/
const frase = prompt("Digite uma frase: ")
const array = frase.split(' ')
console.log(array)
 /*---------------------------------------------------------------------------------------------------
 2)
 */
const fruits = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log (`A posição da palavra acabaxi é ${fruits.indexOf("Abacaxi")} e o tamanho do array é ${fruits.length}`)