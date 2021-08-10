function obterEstatisticas(numeros: Array<number>) {

    const numerosOrdenados: Array<number> = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0
    let num: number

    for (num of numeros) {
        soma += num
    }

    const estatisticas: {maior: number, menor: number, media: number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([1,5,6,9,7,10]))