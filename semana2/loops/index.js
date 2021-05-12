/*
Exercícios de interpretação de código
1) Está acrescentado o i no valor, que incialmente é igual a 0, até que o i seja menor que 5.
resposta: 10
------------------------------------------------------------------------------------------------
2) a) 
19
21
23
25
27
30

b) Sim. 
for (let numero of lista) {
	console.log(numero)
}
------------------------------------------------------------------------------------------------
03)
0
00
000
0000
------------------------------------------------------------------------------------------------
Exercícios de escrita de código
1)
*/
const numberAnimals = Number(prompt("Quantos animais de estimação você tem?"))

if(numberAnimals === 0){
    alert("Que pena! Você pode adotar um pet!")
}else{
    const nameAnimals = []
    alert("Qual o nome dos seus animais?")
    for(let i = 0; i < numberAnimals; i++){
        nameAnimals.push(prompt(`${i+1}º:`))
    }
    console.log(nameAnimals)
}
/*
------------------------------------------------------------------------------------------------
2)
*/
function printArray(array){
    console.log(array)
}

function arrayDividedByTen(array){
    const newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(array[i]/10)
    }
    console.log(newArray)
}

function pairNumbers(array){
    const pairNumbers = []
    for(let i = 0; i < array.length; i++){
        if( array[i] % 2 === 0){
            pairNumbers.push(array[i])
        }
    }
    console.log(pairNumbers)
}

function printFrase(array){
    const newArray = []
    for(let i = 0; i < array.length; i++){
        let frase = `O elemento do index ${i} é: ${array[i]}`
        newArray.push(frase)
    }
    console.log(newArray)
}

function maxAndMinNumero(array){
    let max = -2000000
    let min = 2000000
    for(let i = 0; i < array.length; i++){
        if( array[i] > max){
            max = array[i]
        }if( array[i] < min){
            min = array[i]
        }
    }
    console.log(`O menor número é ${min} e o maior número é ${max}`)
}