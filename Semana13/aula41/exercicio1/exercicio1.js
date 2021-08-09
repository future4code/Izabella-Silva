//a)utilizando o process.argv
//b)
const name = process.argv[2]
const age = Number(process.argv[3])

if((!name && age) || (name && !age)){
    console.log("Esperava 2 parametros, só recebi um")
}else if(!name && !age){
    console.log("Esperava 2 parametros, não recebi nenhum")
}else{
    console.log(`Olá, ${name} ! Você tem ${age} anos.`)
}

