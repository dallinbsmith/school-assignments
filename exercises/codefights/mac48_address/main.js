function isMAC48Address(inputString) {
    const foo = inputString.split("-").map((item)=>item.split('').every((item)=> item.match(/^\d+$/) || item.match(/[A-F]/gi)))
    return (foo.length === 6 && foo.every(item => item === true))
}


console.log(isMAC48Address("00-1B-63-84-45-E6"));