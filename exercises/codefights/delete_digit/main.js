function deleteDigit(n) {
    var digits = n.toString().split('')
    const nums = digits.map((item, index) => {
            var current = digits.slice()
            current.splice(index, 1)
            return parseInt(current.join(''))
        })
        return Math.max(...nums)
}

console.log(deleteDigit(1520001))







//function deleteDigit(n) {
//   const arr =    n.toString().split('').map((item)=> parseInt(item)) 
//   const small = Math.min(...arr)
//   arr.splice(arr.indexOf(small), 1)
//   return arr.join('')
//}