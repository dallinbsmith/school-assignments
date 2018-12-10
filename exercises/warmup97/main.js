function adjacentElementsProduct(sequence) {
    const firstAry = (sequence.filter(item => item > 0)).sort((a, b) => a-b)
    return sequence.map(item => (item !== -1)? firstAry.shift() : -1)
}

console.log(adjacentElementsProduct([-1, 150, 190, 170, -1, -1, 160, 180]))