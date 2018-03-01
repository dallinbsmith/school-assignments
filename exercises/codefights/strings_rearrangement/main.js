function stringsRearrangement(inputArray) {
    const arranged = [];
    
    const codes = inputArray.map((item)=>{
        let nums = [];
        for(i = 0; i < item.length; i++){
        nums.push(item.charCodeAt(i))
       }
        return nums
    })
    
   const sd = codes.sort(function(a, b){
       return (a.reduce((total, num) => total+ num))  - b.reduce((total, num) => total+ num)
   })

   for(i = 0; i < sd.length - 1; i++){
       if ((sd[i].reduce((total, num) => total+ num)) - (sd[i+1].reduce((total, num) => total+ num)) !== -1){
           console.log(sd[i].reduce((total, num) => total+ num))
           console.log(sd[i+ 1].reduce((total, num) => total+ num))
           return false
       }
   }

    console.log(codes)
    return true
}


console.log(stringsRearrangement(["abc", 
 "bef", 
 "bcc", 
 "bec", 
 "bbc", 
 "bdc"]))



//function stringsRearrangement(inputArray) {
//    const arranged = [];
//    
//    const codes = inputArray.map((item)=>{
//        let nums = [];
//        for(i = 0; i < item.length; i++){
//        nums.push(item.charCodeAt(i))
//       }
//        return nums
//    })
//    
//   const sd = codes.sort(function(a, b){
//       return (a.reduce((total, num) => total+ num))  - b.reduce((total, num) => total+ num)
//   })
//
//   for(i = 0; i < sd.length - 1; i++){
//       if ((sd[i].reduce((total, num) => total+ num)) - (sd[i+1].reduce((total, num) => total+ num)) !== -1){
//           console.log(sd[i].reduce((total, num) => total+ num))
//           console.log(sd[i+ 1].reduce((total, num) => total+ num))
//           return false
//       }
//   }
//
//    console.log(codes)
//    return true
//}