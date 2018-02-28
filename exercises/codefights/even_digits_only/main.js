function evenDigitsOnly(n) {
    const arr =  n.toString().split('')
    return arr.every(item =>(parseInt(item) % 2 ===0)
 )
}

console.log(evenDigitsOnly(248622))