function firstDigit(inputString) {
   return inputString.split('').filter((item) => !isNaN(parseInt(item)))[0]
}



console.log(firstDigit("var_1__Int"))



//    const arr = inputString.split('')
//    for(i=0; i<arr.length; i++){
//        if (arr[i] !== /[0-9]+/){
//            console.log(arr[i])
//        }
//    }
//    return arr