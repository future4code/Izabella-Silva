const sumNumbers = (n: number, acc: number = 0): number => {
    if(n === 0){
        return acc
    }

    return sumNumbers(n-1, acc + n)
}

console.log(sumNumbers(3));
console.log(sumNumbers(10));
console.log(sumNumbers(100));