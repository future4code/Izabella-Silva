
const operation= process.argv[2]
const number1 = Number(process.argv[3])
const number2 = Number(process.argv[4])

if((operation && !number1 && !number2) || (!operation && number1 && !number2) || (!operation && !number1 && number2)){
    console.log("Esperava 3 parâmetros só recebi um")
}else if((operation && !number1 && number2) || (operation && number1 && !number2) || (!operation && number1 && number2)){
    console.log("Esperava 3 parâmetros só recebi 2")
}else if(!operation && !number1 && !number2){
    console.log("Esperava 3 parâmetros, não recebi nenhum")
}else if(operation && number1 && number2){
    switch(operation){
        case "add":
            console.log(`Resposta: ${number1 + number2}`)
            break;
        case "sub":
            console.log(`Resposta: ${number1 - number2}`)
            break;
        case "mult":
            console.log(`Resposta: ${number1 * number2}`)
            break;
        case "div":
            console.log(`Resposta: ${number1 / number2}`)
            break;
        default:
            console.log("Digite add para adição, sub para subitração, mult para multiplicação e div para divisão")
    }
}