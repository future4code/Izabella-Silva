function stringCompression(input: string): any{
    const substrings = []
    let lastChar = input[0]
    let charCount = 0

    for(const char of input){
        if(char !== lastChar){
            substrings.push(lastChar+charCount)
            lastChar = char
            charCount = 0
        }

        charCount++
    }

    substrings.push(lastChar + charCount)
    let result = ""
    for(const key of substrings){
        result += key
    }

    return result.length > input.length ? input : result
}

console.log(stringCompression("aabbb"))
console.log(stringCompression("aabcccccaaa"))
console.log(stringCompression("accurate"))
console.log(stringCompression("escola"))
console.log(stringCompression("accuraaaaaaaaaate"))