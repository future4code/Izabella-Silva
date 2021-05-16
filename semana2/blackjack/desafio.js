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

//sorteia cartas
function sortearCartasJogadores(){
   let arrayDeCartasSorteadas = []
   let carta1Usuario = comprarCarta();
   let carta2Usuario = comprarCarta();
   
   arrayDeCartasSorteadas.push(carta1Usuario,carta2Usuario)
   console.log(`Sortear cartas Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto}`) 
   return arrayDeCartasSorteadas
}

//imprime no console as primeiras cartas dos jogadores e as pontuações
function imprimirEscolhaEPontuacao(){
   console.log(`Usuário - cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} - pontuação ${pontuacoesUsuario}`) 
   console.log(`Computador - cartas: ${cartasComputador[0].texto} ${cartasComputador[1].texto} - pontuação ${pontuacoesComputador}`)
}

//soma pontuações das cartas   
function somarPontuacoes(cartas){
   tamanhoDoObjeto = Object.keys(cartas).length
   let soma = 0
   for( let i = 0; i < tamanhoDoObjeto; i++){
      soma = soma + cartas[i].valor
   }
   return soma
}

//compra novas cartas e as adiciona no objeto das cartas iniciais
function comprarNovasCartas(cartasJogadores){
   const novaCarta = comprarCarta()
   cartasJogadores.push(novaCarta)
   return cartasJogadores
}

//imprime na tela as cartas dos jogadores
function imprimirCartas(cartas){
   tamanhoDoObjeto = Object.keys(cartas).length
   const impressaoCartas = []
   for(let i = 0; i < tamanhoDoObjeto; i++){
      impressaoCartas.push(cartas[i].texto)
   }
   return impressaoCartas
}

//imprime resultado final
function imprimirResultado(){
   if(pontuacoesUsuario > 21){
      alert(`Suas cartas são ${imprimirCartas(cartasUsuario)} . Sua pontuação é ${pontuacoesUsuario}.
      As cartas do computador são ${imprimirCartas(cartasComputador)} . A pontuação do computador é ${pontuacoesComputador}.
      O computador ganhou!`)
   }

   if(pontuacoesUsuario === pontuacoesComputador){
      alert(`Suas cartas são ${imprimirCartas(cartasUsuario)} . Sua pontuação é ${pontuacoesUsuario}.
      As cartas do computador são ${imprimirCartas(cartasComputador)} . A pontuação do computador é ${pontuacoesComputador}.
      Empataram!!`)
   }
   if(pontuacoesComputador > pontuacoesUsuario ){
      alert(`Suas cartas são ${imprimirCartas(cartasUsuario)} . Sua pontuação é ${pontuacoesUsuario}. 
      As cartas do computador são ${imprimirCartas(cartasComputador)}. A pontuação do computador é ${pontuacoesComputador}. 
      O usuário ganhou!`)
   }
}

alert("Bem vindo ao jogo de Blackjack!")

let confirmar = confirm("Quer iniciar uma nova rodada?")

let cartasUsuario
let cartasComputador
let pontuacoesUsuario
let pontuacoesComputador

if(confirmar){

   // sortear carta
   cartasUsuario = sortearCartasJogadores()
   cartasComputador = sortearCartasJogadores()

   //verifica se usuário ou computador tem dois ases(A)
   while((cartasUsuario[0].valor === 11 && cartasUsuario[1].valor === 11) || (cartasComputador[0].valor === 11 && cartasComputador[1].valor === 11)){
      cartasUsuario = sortearCartasJogadores()
      cartasComputador = sortearCartasJogadores()
   }

   pontuacoesUsuario = somarPontuacoes(cartasUsuario)
   pontuacoesComputador = somarPontuacoes(cartasComputador)

   imprimirEscolhaEPontuacao()

   let confirmacaoCompraCarta = confirm(`Suas cartas são ${cartasUsuario[0].texto} ${cartasUsuario[1].texto}.
   A carta revelada do computador é ${cartasComputador[0].texto}.
   Deseja comprar mais uma carta?`)

   if (confirmacaoCompraCarta){

      cartasUsuario = comprarNovasCartas(cartasUsuario)
      pontuacoesUsuario = somarPontuacoes(cartasUsuario)

      while(pontuacoesUsuario <=21 && confirm(`Suas cartas são ${imprimirCartas(cartasUsuario)}.
      A carta revelada do computador é ${cartasComputador[1].texto}.
      Deseja comprar mais uma carta?`)){
         cartasUsuario = comprarNovasCartas(cartasUsuario)
         pontuacoesUsuario = somarPontuacoes(cartasUsuario)
      }
      confirmacaoCompraCarta = false
   }
   
   if(!confirmacaoCompraCarta && pontuacoesUsuario <= 21){
      while (pontuacoesComputador < pontuacoesUsuario){
         cartasComputador = comprarNovasCartas(cartasComputador)
         pontuacoesComputador = somarPontuacoes(cartasComputador)
      }
   }
   imprimirResultado()

}else{
   console.log("Usuário não quer jogar")
}