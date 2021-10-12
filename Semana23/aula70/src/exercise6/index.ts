const getBiggerNumber = (array: Array<number>, index: number = 0, bigger: number = 0): number => {
    let biggerAux = bigger
    if(array[index] > bigger){
        biggerAux = array[index]
    }
   
    if(index === array.length -1){
        return biggerAux
   }

   return getBiggerNumber(array, index + 1, biggerAux)
}

console.log(getBiggerNumber([1,2,3,8,9,10,50]))