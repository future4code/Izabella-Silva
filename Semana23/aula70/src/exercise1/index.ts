//a)
const printNumbers = (n: number) => {
    if(n >= 0){
        printNumbers(n-1)
        console.log(n)
    }
}

const printNumbersDesc = (n: number) => {
    if( n >= 0){
        console.log(n)
        printNumbersDesc(n-1)
    }
}

printNumbersDesc(5)