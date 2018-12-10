function longestWord(text) {
    const arr = text.split(":")
    if (arr[0] < 25 && arr[1] < 60 && text.split('')[0] !== 0){
        return true
    }
    return false
}

console.log(longestWord("13:58"))



// && parseInt(arr[arr.length - 2] + arr[arr.length - 1]) < 60 
//        && parseInt(arr[arr.length - 2] + arr[arr.length - 1]) < )