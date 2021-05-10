/* Exercícios de interpretação de código
1)
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

Resposta:
Matheus Nachtergaele
Virginia Cavendish
{canal: "Globo", horario: "14h"}
--------------------------------------------------------------------------------
2)
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

Resposta:
a)
{ nome: 'Juca', idade: 3, raca: 'SRD' }
{ nome: 'Juba', idade: 3, raca: 'SRD' }
{ nome: 'Jubo', idade: 3, raca: 'SRD' }
b) Os três pontos faz com que copia as propriedades do objeto citado
--------------------------------------------------------------------------------
3)

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
resposta:
a)
false
underfined
b) aparece underfined para altura, porque não existe a chave chamada altura
--------------------------------------------------------------------------------
Exercícios de escrita de código
1)
a) e b)
*/
const pessoa = {
    nome: "Izabella",
    apelidos: ["Bella", "Bellinha", "Bel"]
}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)

const novaPessoa = {
    ...pessoa,
    apelidos: ["Iza", "Bellona", "Bolota"]
}
console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidos[0]}, ${novaPessoa.apelidos[1]} ou ${novaPessoa.apelidos[2]} `)
/*----------------------------------------------------------------------------
2)
*/
const pessoa = {
    nome: "Izabella",
    idade: 29,
    profissao: "Programadora"
}

function minhaFuncao(pessoa){
    const array = []
    array.push(pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length)
    return array
}

// console.log(minhaFuncao(pessoa))
/*----------------------------------------------------------------------------
3)
*/
const carrinho = []

const fruta1 = {
    nome: "Maça",
    disponibilidade: true
}

const fruta2 = {
    nome: "Banana",
    disponibilidade: true
}

const fruta3 = {
    nome: "Abacate",
    disponibilidade: true
}

function adicionandoItem(frutas){
    carrinho.push(frutas)
}

adicionandoItem(fruta1)
adicionandoItem(fruta2)
adicionandoItem(fruta3)

console.log(carrinho)

/*----------------------------------------------------------------------------
DESAFIOS
1)
*/
const userName = prompt("Qual o seu nome? ")
const userAge = Number(prompt("Qual a sua idade? "))
const userProfession = prompt("Qual a sua profissão? ")

const userInformation = {
    name:  userName,
    age: userAge,
    profession: userProfession
}
console.log(userInformation)
console.log(typeof(userInformation))

/*----------------------------------------------------------------------------
2)
*/
const filme1 = {
    anoLancamento: 1977,
    nome: "Star Wars - Nova esperança"
}

const filme2 = {
    anoLancamento: 1980,
    nome: "Star Wars - O imprério contra-ataca"
}
console.log("O primeiro filme foi lançado antes do segundo?", filme1.anoLancamento < filme2.anoLancamento)
console.log("O primeiro filme foi lançado no mesmo ano do segundo?", filme1.anoLancamento === filme2.anoLancamento)

/*----------------------------------------------------------------------------
3)
*/
function controleDeEstoque(frutas){
    frutas.disponibilidade = !(frutas.disponibilidade)
    return frutas.disponibilidade
}

controleDeEstoque(fruta1)
controleDeEstoque(fruta2)
controleDeEstoque(fruta3)

console.log(carrinho)