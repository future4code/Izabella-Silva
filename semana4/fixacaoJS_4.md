~~~javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let repetir = 0
  for(let i= 0; i < arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] === numeroEscolhido){
      repetir++
    }
  }
  
  if(repetir !== 0){
    return `O número ${numeroEscolhido} aparece ${repetir}x`
  }else{
    return `Número não encontrado`
  }
}
~~~