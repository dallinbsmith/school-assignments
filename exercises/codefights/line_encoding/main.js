function lineEncoding(s) {
    let count = 0;
    let reset = 0
    const foo = s.split('').map((item, index, array)=>{
        if (item === array[index+1]){ 
            count++
            return ''
        }else{
            count++
            reset = count
            count = 0
            return (reset === 1)? item : reset + item
        }
    })
    return foo.join('')
}


console.log(lineEncoding("aabbbc"))