function avoidObstacles(inputArray) {
    let sorted = inputArray.sort(function(a, b) {return a - b;});
    const missing = [];
    let answer = 0
    let count = 0
    let runAgain = true
    for(var i=1;i<sorted[sorted.length -1];i++) {
        if(sorted.indexOf(i) == -1){
        missing.push(i);
        }
    }
    function ridTheMissing(inputArr, num){
         for(var i=1;i<sorted[sorted.length -1];i++) {
            if (inputArr[i] % missing[count] === 0){
                count++
                break
            }else if(inputArr[i] === sorted[sorted.length -1] && inputArr[i] % missing[count] !== 0) {
                runAgain = false     
            }
         }
            if (runAgain === true){
                ridTheMissing(inputArr, count) 
            } else{
            answer = num; 
         }
    }
    ridTheMissing(inputArray, count);
    if (missing[answer] === undefined){
        return inputArray[inputArray.length - 1] + 1
    }else{
    return missing[answer]
    }
}

    
console.log(avoidObstacles([2, 3])) 
