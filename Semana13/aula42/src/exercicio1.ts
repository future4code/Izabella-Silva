// 1)
// a)
// const minhaString: string = "Izabella"
// Resposta: erro de coliação

//b)
let meuNumero: number | string = 5

//c)

enum CORES_ARCO_IRIS {
    VERMELHO = "vermelho",
    LARANJA= "laranja",
    AMARARELO= "amarelo",
    VERDE= "verde",
    AZUL= "azul",
    ANIL= "anil",
    VIOLETA= "violeta"
}

type pessoa = {
    nome:string,
    idade: number,
    corFavorita: CORES_ARCO_IRIS
}

const izabella: pessoa = {
    nome: "Izabella",
    idade: 29,
    corFavorita: CORES_ARCO_IRIS.VERMELHO,
}




