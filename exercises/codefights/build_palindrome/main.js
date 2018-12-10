function buildPalindrome(st) {
    let count = 0
    while (st !== st.split('').reverse().join('')){
            const arr = st.split('')
            arr.splice((arr.length - count), 0, arr[count])
            st = arr.join('')
            count++
    }
    return st
}

console.log(buildPalindrome("abcdc"))