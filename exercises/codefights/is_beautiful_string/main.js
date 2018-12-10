function isBeautifulString(inputString) {
   const arr = []
   const sorted = []
         inputString.split('').forEach((item, index)=>{
          (arr.indexOf(item, 0) === -1)? arr.push(item, 0): arr[arr.indexOf(item)+1]++                   
        })
          arr.forEach((item, index)=>{
         if (index % 2 === 1){
             sorted.push(item)
            }               
        }) 
    console.log(sorted)
  for ( i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] < sorted[i+1]) {
        return false
    }
  }
    return true
}


console.log(isBeautifulString("bbbaa"))