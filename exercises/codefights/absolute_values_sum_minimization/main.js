function absoluteValuesSumMinimization(a) {
        const arr = a.map((x) =>{
            let total = 0
            for (i = 0; i < a.length; i++){
                total += (Math.abs(a[i] - x))        
         }
                return total
     })
        return a[arr.indexOf(Math.min(...arr))]
}

console.log(absoluteValuesSumMinimization([2, 4, 7]))