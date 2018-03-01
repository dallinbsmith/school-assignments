function growingPlant(upSpeed, downSpeed, desiredHeight) {
    days = 0
    sum = 0
   while(true){
       days++
       sum += upSpeed
        if (sum >= desiredHeight){return true}
        }else{
        sum -= downSpeed
        }   
    } 







//function growingPlant(upSpeed, downSpeed, desiredHeight) {
//    days = 0
//    sum = 0
//    function recursion(u, d){
//       sum += u
//        if (sum < desiredHeight){ 
//            sum-=d
//        }else{
//            return days
//        }   
//       if (sum < desiredHeight){ 
//           days++
//           recursion(u, d)}
//    } 
//    recursion(upSpeed,downSpeed)
//    return days
//}

console.log(growingPlant(100, 10, 910));