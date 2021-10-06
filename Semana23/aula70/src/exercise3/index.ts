import { format } from "path/posix";

const sumNumbersInterative = (n: number, acc: number = 0): number => {
    let sum = 0

    for(let i = 0; i <= n; i++){
        sum += i
    }

    return sum
}

console.log(sumNumbersInterative(3));
console.log(sumNumbersInterative(10));
console.log(sumNumbersInterative(100));