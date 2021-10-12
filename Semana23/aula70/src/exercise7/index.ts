const foundFirstCapitalLetter = (s: string, char: string = ""): any => {
    if(char && char.toUpperCase() === char){
        return char
    }

   return foundFirstCapitalLetter(s.substring(1), s[0])
}

console.log(foundFirstCapitalLetter("izaBella"))