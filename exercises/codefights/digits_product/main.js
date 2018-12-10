function digitsProduct(num) {
    let threeCount = 0
    var primeFactors = [];
    while (num % 2 === 0) {
        primeFactors.push(2);
        num = num / 2;
    }
    
    var sqrtNum = Math.sqrt(num);
    for (var i = 3; i <= sqrtNum; i++) {
        while (num % i === 0) {
            primeFactors.push(i);
            num = num / i;
        }
    }

    if (num > 2) {
        primeFactors.push(num);
    }else if(num === 0){
        return 10
    }else if(num === 1){
        return 1
    }else{
        return -1         
    }
    return primeFactors.join('')
}



console.log(digitsProduct(450))




 //Find all the primes 
    //stringify all primes
    //exceptions of 0, prime, 1