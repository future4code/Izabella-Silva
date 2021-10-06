const calculateDigits = (n: number, acc: number = 1): number => {
    if(n < 10){
        return acc
    }

    return calculateDigits(n/10, acc + 1)
}

console.log(calculateDigits(10))