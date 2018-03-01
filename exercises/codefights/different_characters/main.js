function differentSymbolsNaive(s) {
    answer = []
    arr = s.split('');
        for (i = 0; i < arr.length; i++){
            if (answer.indexOf(arr[i]) === -1){
                answer.push(arr[i])
            } 
        }
    return answer.length
}

console.log(differentSymbolsNaive("cabca"))