/*
Exercícios de interpretação de código
1)
resposta:
{ nome: 'Amanda Rangel', apelido: 'Mandi' } 0 [
  { nome: 'Amanda Rangel', apelido: 'Mandi' }, 
  { nome: 'Laís Petra', apelido: 'Laura' },    
  { nome: 'Letícia Chijo', apelido: 'Chijo' }  
]
{ nome: 'Laís Petra', apelido: 'Laura' } 1 [  
  { nome: 'Amanda Rangel', apelido: 'Mandi' },
  { nome: 'Laís Petra', apelido: 'Laura' },
  { nome: 'Letícia Chijo', apelido: 'Chijo' }
]
{ nome: 'Letícia Chijo', apelido: 'Chijo' } 2 [
  { nome: 'Amanda Rangel', apelido: 'Mandi' },
  { nome: 'Laís Petra', apelido: 'Laura' },
  { nome: 'Letícia Chijo', apelido: 'Chijo' }
]
---------------------------------------------------------
2)
resposta:
[ 'Amanda Rangel', 'Laís Petra', 'Letícia Chijo' ]
---------------------------------------------------------
3)
resposta
[ 'Amanda Rangel', 'Laís Petra', 'Letícia Chijo' ]
---------------------------------------------------------
Exercícios de escrita de código
1)
*/
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

const nomePets = pets.map((pet) => {
    return pet.nome
})

const petSalsicha = pets.filter((pet) => {
    return pet.raca === "Salsicha"
})

const petPoodle = pets.filter((pet) => {
    return pet.raca === "Poodle"
}).map((pet) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`
})
/*
---------------------------------------------------------
2)
*/
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const nomeProdutos = produtos.map((produto) => {
    return produto.nome
})

const descontoCincoPorcento = produtos.map((produto) => {
    delete produto.categoria
    produto.preco = (produto.preco*0.95).toFixed(2)
    return produto
})

const categoriaBebidas = produtos.filter((produto) => {
    return produto.categoria === "Bebidas"
})

const produtosYpe = produtos.filter((produto) => {
    return produto.nome.includes("Ypê")
})

const stringProdutosYpe = produtos.filter((produto) => {
    return produto.nome.includes("Ypê")
}).map((produto) =>{
    return `Compre ${produto.nome} por ${produto.preco}`
})

/*
---------------------------------------------------------
Desafio
1)
*/
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

const nomeDePokemonsOrdemAlfabetica = pokemons.map((pokemon) => {
    return pokemon.nome
}).sort()

// const tiposDepokemons = pokemons.map((pokemon, index) => {

// })

// console.log(tiposDepokemons)