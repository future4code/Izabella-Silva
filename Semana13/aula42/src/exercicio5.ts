function operacoesComNumeros(num1: number, num2:number){
    console.log(`A soma dos dois números é ${num1 + num2}`)
    console.log(`A subtração dos dois números é ${num1 - num2}`)
    console.log(`A multiplicação dos dois números é ${num1 * num2}`)
    if(num1>num2){
        console.log(`O maior número é ${num1}`)
    }else{
        console.log(`O maior número é ${num2}`)
    }
}