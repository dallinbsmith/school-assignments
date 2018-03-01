function arrayMaxConsecutiveSum(inputArray, k) {
   const arr = [];
    for (i = 0; i < inputArray.length; i++){
        let sum = 0;
        for (j = 0; j < k; j++){
            if (i+j < inputArray.length){
           sum += inputArray[i+j]
            }
       }
        arr.push(sum)
   }
    return arr
}


console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2))





function arrayMaxConsecutiveSum(inputArray, k) {
    const consecs = inputArray.map((item, index, arr)=>{
           let sum = 0
            for(i = 0; i < k; i++){
            if (index + i < arr.length){    
              sum += arr[index + i]
            }
           } 
        return sum
    })
    return Math.max(...consecs)
}
