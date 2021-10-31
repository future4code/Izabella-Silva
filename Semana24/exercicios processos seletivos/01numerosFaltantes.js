const missingNumber = (arrayNumbers,inicial,final) => {
    let expectedSum = 0
    for(let i = inicial; i <=final; i++){
        expectedSum += + i
    }
    
    let sum = 0
    for(const num of arrayNumbers){
        sum += num
    }

    const missingNumber = expectedSum - sum

    return missingNumber
}