function alphabeticShift(inputString) {
    const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const answer = inputString.split('').map((item)=>{
            let alphaIndex = alpha.indexOf(item)
            return (alphaIndex === 25) ? alpha[0] : alpha[alphaIndex+1]
        })
    return answer.join('')
}


console.log(alphabeticShift("crazy"))