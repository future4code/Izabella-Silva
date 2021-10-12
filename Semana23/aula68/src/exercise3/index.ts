//a) [[1,2,3], [4,5,6], [7,8,9]]
//b)
function replaceMatrixValue(
    matrix: number[][],
    rowIndex: number,
    columnIndex: number,
    value: number
): any {
    if(
        matrix[rowIndex] === undefined ||
        matrix[rowIndex][columnIndex] === undefined
    ){
        return "Fora do intevalo da matrix"
    }

    matrix[rowIndex][columnIndex] = value

    return matrix
}

console.log(
    replaceMatrixValue([[1,2],[3,4]], 1,1,6)
)