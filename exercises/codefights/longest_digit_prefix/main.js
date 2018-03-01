function digitDegree(n) {
    
    let newNum = n
    let count = 0
     while(newNum > 10){
       let arr = newNum.toString().split('').map((item) => parseInt(item))
       const reduced = arr.reduce((total, num)=>{
            return total + num
        })
     newNum = reduced    
     count++    
    }
     return count
}




console.log(digitDegree(99))