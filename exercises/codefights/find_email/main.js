function findEmailDomain(address) {
    const answer = []
    address.split('').forEach((item,index, arr)=>{
        (index > arr.indexOf("@"))? answer.push(item) : item        
    })
    return answer.join('')
}


console.log(findEmailDomain("prettyandsimple@example.com"))