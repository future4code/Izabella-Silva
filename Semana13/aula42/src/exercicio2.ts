type Estatistica = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: Array<number>): Estatistica {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0
    let num: number

    for (num of numeros) {
        soma += num
    }

    const estatisticas: Estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type AmostraDeIdades = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => Estatistica
}

const amostraDeIdades: AmostraDeIdades = {
    numeros:[21, 18, 65, 44, 15, 18],
    obterEstatisticas
}