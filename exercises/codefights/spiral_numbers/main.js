//function addNextRepeatingCharacter(s) {
//    const arr = s.map((item, index, ary)=> (index === ary.length - 1)? item * 0 : item * ary[index + 1])
//     return Math.max(...arr)
//}
//
//
//console.log(addNextRepeatingCharacter([3, 6, -2, -5, 7, 3]))



//    const answer = s.split('').reduce((prev, current, i, arr)=>{
//        if ((parseInt(current) === parseInt(arr[arr.length/2 + i])) || ((i > arr.length/2) && (parseInt(current) === parseInt(arr[i - arr.length/2])))) {
//            return parseInt(prev) + parseInt(current)
//        }else{
//            return parseInt(prev)
//        }
//    }, 0)
//    return answer