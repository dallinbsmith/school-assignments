function absoluteValuesSumMinimization(a) {
        console.log("foo")
        const arr = a.map((item) =>{
            let total = 0
            for (i = 0; i < a.length; i++){
            total+=  Math.abs(a[i] - item)    
                return total    
         }
     })
        return arr
}

console.log(absoluteValuesSumMinimization([2, 4, 7]))