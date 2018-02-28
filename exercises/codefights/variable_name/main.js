function variableName(name) {
        const arr = name.split('')
        if (!isNaN(parseInt(arr[0]))){
        return false
    }
   const foo = name.replace(/([A-Za-z0-9_]+)/, '')
    return (foo === '')? true : false
}


console.log(variableName("2w2"))