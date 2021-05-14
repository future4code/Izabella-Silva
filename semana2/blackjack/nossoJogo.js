/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


// function sorterCartaJogadores(){
//    let arrayDeCartasSorteadas = []
//    let carta1Usuario = comprarCarta();
//    let carta2Usuario = comprarCarta();
//    let carta1Computador = comprarCarta();
//    let carta2Computador = comprarCarta();

//    arrayDeCartasSorteadas.push(carta1Usuario,carta2Usuario,carta1Computador,carta2Computador)
//    return arrayDeCartasSorteadas
// }

// function pontuacaoInicial(cartasJogadores){
//    let pontuacaoJogadores = []
//    let pontuacaoUsuario = cartasJogadores[0].valor + cartasJogadores[1].valor
//    let pontuacaoComputador = cartasJogadores[2].valor + cartasJogadores[3].valor
//    pontuacaoJogadores.push(pontuacaoUsuario, pontuacaoComputador)
//    return pontuacaoJogadores
// }

// function imprimirEscolhaEPontuacao(cartasJogadores,pontuacaodosJogadores){
//    console.log(`Usuário - cartas: ${cartasJogadores[0].texto} ${cartasJogadores[1].texto} - pontuação ${pontuacaodosJogadores[0]}`)
//    console.log(`Computador - cartas: ${cartasJogadores[2].texto} ${cartasJogadores[3].texto} - pontuação ${pontuacaodosJogadores[1]}`)
// }

// function imprimirResultado(pontuacaodosJogadores){
//    if(pontuacaodosJogadores[0] > pontuacaodosJogadores[1]){
//       return console.log("Usuário ganhou!")
//    }if(pontuacaodosJogadores[0] < pontuacaodosJogadores[1]){
//       return console.log("Computador Ganhou!")
//    }if(pontuacaodosJogadores[0] === pontuacaodosJogadores[1]){
//       return console.log("Empatou")
//    }
// }

// alert("Bem vindo ao jogo de Blackjack!")

// if(confirm("Quer iniciar uma nova rodada?")){

//    let cartasJogadores = sorterCartaJogadores()
//    let pontuacaodosJogadores = pontuacaoInicial(cartasJogadores)
//    imprimirEscolhaEPontuacao(cartasJogadores, pontuacaodosJogadores)
//    imprimirResultado(pontuacaodosJogadores)

// }else{
//    alert("O jogo acabou")
// }