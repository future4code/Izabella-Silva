//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui
  const newArray = []
  for(let i = 1; i <= array.length; i++){
   newArray.push(array[array.length-i])
  }
  return newArray
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
   const newArray = []
   for(let i = 0; i < array.length; i++){
      if(array[i]%2 === 0){
         newArray.push(array[i]*array[i]) 
      }
   }
   return newArray
}

//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
   const newArray = []
   for(let i = 0; i < array.length; i++){
      if(array[i]%2 === 0){
         newArray.push(array[i]) 
      }
   }
   return newArray
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   let maior = -Infinity
   for(let i = 0; i < array.length; i++){
      if(array[i] > maior){
         maior = array[i]
      }
   }
   return maior
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   let i = 0
   while( i < array.length){
      i++
   }
   return i
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2 
   const booleano4 = !booleano3

   resposta1 = booleano1 && booleano2 && !booleano4
   resposta2 = (booleano1 && booleano2) || !booleano3
   resposta3 = (booleano2 || booleano3) && (booleano4 || booleano1)
   resposta4 = !(booleano2 && booleano3) || !(booleano1 && booleano3)
   resposta5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

   const array = [resposta1,resposta2,resposta3,resposta4,resposta5]

   return array
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   const numerosPares = []
   let i = 0
   while(i <= n){
      if(i % 2 === 0){
         numerosPares.push(i)
      }else{
         i--
      }
      i++
   }
   return numerosPares
}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
  if(a === b && a === c ){
     return "Equilátero"
  }else if((a === b && b !== c) || (a !== b && b === c) ){
     return "Isósceles"
  }else if(a !== b && a !== c && b !== c){
     return "Escaleno"
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   let maior
   let menor
   if(num1 > num2){
      maior = num1
      menor = num2
   }else if(num2 > num1){
      maior = num2
      menor = num1
   }

   const maiorDivisivelporMenor = maior % menor === 0
   const diferenca = maior - menor

   return {maiorNumero: maior, maiorDivisivelporMenor: maiorDivisivelporMenor, diferenca: diferenca}
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
   let tamanho = array.length;
   for (let i = 0; i < tamanho; i++) {
       for (let j = 0; j < tamanho; j++) {
           if (array[j] > array[j + 1]) {
               let aux = array[j];
               array[j] = array[j + 1];
               array[j + 1] = aux;
           }
       }
   }
   
   return [array[array.length - 2], array[1]]
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
   let tamanho = array.length;
   for (let i = 0; i < tamanho; i++) {
       for (let j = 0; j < tamanho; j++) {
           if (array[j] > array[j + 1]) {
               let aux = array[j];
               array[j] = array[j + 1];
               array[j + 1] = aux;
           }
       }
   }
   return array
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }

    return filme
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }

   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
   const area = lado1*lado2
   const perimetro = lado1*2 + lado2*2

   return{largura: lado1, altura: lado2, perimetro: perimetro, area: area}
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
   return {...pessoa, nome: "ANÔNIMO"}
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   const adultos = arrayDePessoas.filter((pessoa) => {return pessoa.idade >= 20})
   return adultos
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   const criancasEAdolescentes = arrayDePessoas.filter((pessoa) => {return pessoa.idade < 20})
   return criancasEAdolescentes
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
   const multiplicacaoPor2 = array.map((numeros) => {return numeros*2})
   return multiplicacaoPor2
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
  const multiplicacaoPor2 = array.map((numeros) => {
   numeros = numeros*2
   return numeros.toString()})
   return multiplicacaoPor2
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
   let resultado
   const imparOuPar = array.map((numeros) => {
      if(numeros % 2 === 0){
         return  `${numeros} é par`
      }else{
         return  `${numeros} é ímpar`
      }
   })
   return imparOuPar
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
   const pessoasAutorizadas = pessoas.filter((pessoas) => {
      return (pessoas.altura>=1.5 && (pessoas.idade>14 && pessoas.idade < 60))
   })
   return pessoasAutorizadas
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
   const pessoasNaoAutorizadas = pessoas.filter((pessoas) => {
      return !(pessoas.altura>=1.5 && (pessoas.idade>14 && pessoas.idade < 60))
   })
   return pessoasNaoAutorizadas
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}