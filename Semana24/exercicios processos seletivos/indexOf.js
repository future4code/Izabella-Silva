const indexOf = (
    source, query, mainIndex = 0, sourceIndex = 0, queryIndex = 0
) => {

    if(sourceIndex > source.length){
        return -1
    }

    if(queryIndex >= query.length){
        return mainIndex
    }

    if(source[sourceIndex] === query[queryIndex]){
        return indexOf(source, query, mainIndex, sourceIndex + 1, query)
    }else{
        return indexOf(source, query, mainIndex + 1, mainIndex + 1, 0)
    }
}