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


function sorterCartaJogadores(){
   let arrayDeCartasSorteadas = []
   let carta1Usuario = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
   let carta2Usuario = comprarCarta();
   let carta1Computador = comprarCarta();
   let carta2Computador = comprarCarta();
   
   arrayDeCartasSorteadas.push(carta1Usuario,carta2Usuario,carta1Computador,carta2Computador)
   return arrayDeCartasSorteadas
}
   
function pontuacaoInicial(cartasJogadores){
   let pontuacaoJogadores = []
   let pontuacaoUsuario = cartasJogadores[0].valor + cartasJogadores[1].valor
   let pontuacaoComputador = cartasJogadores[2].valor + cartasJogadores[3].valor

   pontuacaoJogadores.push(pontuacaoUsuario, pontuacaoComputador)
   return pontuacaoJogadores
}
   
function imprimirEscolhaEPontuacao(cartasJogadores,pontuacaodosJogadores){
   console.log(`Usuário - cartas: ${cartasJogadores[0].texto} ${cartasJogadores[1].texto} - pontuação ${pontuacaodosJogadores[0]}`) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
   console.log(`Computador - cartas: ${cartasJogadores[2].texto} ${cartasJogadores[3].texto} - pontuação ${pontuacaodosJogadores[1]}`) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
}
   
function somarPontuacaoes(pontuacaoCartasUsuario){
   soma = 0
   for( let i = 0; i < pontuacaoCartasUsuario.length; i++){
      soma = soma + pontuacaoCartasUsuario[i]
   }
   return soma
}

function regrasJogo(cartasJogadores, pontuacaodosJogadores){
   const cartasUsuario = [cartasJogadores[0], cartasJogadores[1]]
   const cartasComputador = [cartasJogadores[2], cartasJogadores[3]]
   
   if ((cartasJogadores[0].valor === 11 && cartasJogadores[1].valor === 11) || (cartasJogadores[2].valor === 11 && cartasJogadores[3].valor === 11)){
      sorterCartaJogadores()
   }if (confirm(`Suas cartas são ${cartasUsuario}. A carta revelada do computador é ${cartasJogadores[2]}.
   Deseja comprar mais uma carta?`)){
   
      const pontuacaoComputador = [pontuacaodosJogadores[2], pontuacaodosJogadores[3]]
      const pontuacaoCartasUsuario = [pontuacaodosJogadores[0], pontuacaodosJogadores[1]]
      let pontuacaoTotalUsuario = somarPontuacaoes(pontuacaoCartasUsuario)
      let i = 0

      while(pontuacaoTotalUsuario <= 21 && confirm(`Suas cartas são ${cartasUsuario}. 
      A carta revelada do computador é ${cartasJogadores[2]}.
      Deseja comprar mais uma carta?`)){
         const novaCarta = comprarCarta()
         cartasUsuario.push(novaCarta)
         pontuacaoCartasUsuario.push(novaCarta.valor)
         pontuacaoTotalUsuario = somarPontuacaoes(pontuacaoCartasUsuario)
         i++
      }
   
      if(pontuacaoCartasUsuario > pontuacaoComputador){
         alert(`Suas cartas são ${cartasUsuario} . Sua pontuação é ${pontuacaoTotalUsuario}.
         As cartas do computador são ${cartasComputador} . A pontuação do computador é ${pontuacaoComputador}.
         O Usuário ganhou!`)
      }if(pontuacaoCartasUsuario < pontuacaoComputador && !(confirm("Deseja comprar mais uma carta?"))){
         alert(`Suas cartas são ${cartasUsuario} . Sua pontuação é ${pontuacaoTotalUsuario}.
         As cartas do computador são ${cartasComputador} . A pontuação do computador é ${pontuacaoComputador}.
         O Usuário perdeu!`)
      }if (pontuacaoCartasUsuario === pontuacaoComputador){
         alert(`Suas cartas são ${cartasUsuario} . Sua pontuação é ${pontuacaoTotalUsuario}.
         As cartas do computador são ${cartasComputador} . A pontuação do computador é ${pontuacaoComputador}.
         empataram empatou!`)
      }
   }
}

   
alert("Bem vindo ao jogo de Blackjack!")
   
if(confirm("Quer iniciar uma nova rodada?")){
   
   let cartasJogadores = sorterCartaJogadores()
   let pontuacaodosJogadores = pontuacaoInicial(cartasJogadores)
   imprimirEscolhaEPontuacao(cartasJogadores, pontuacaodosJogadores)
   regrasJogo(cartasJogadores, pontuacaodosJogadores)
   
}else{
   alert("O jogo acabou")
}

