function chessKnight(cell) {
    let count = 0
    const assemble = []
    const alpha = ["a", "b", "c", "d", "e", "f", "g", "h"]
    const numArr = [alpha.indexOf(cell.split('')[0]) , parseInt(cell.split('')[1] -1)] 
    assemble.push([numArr[0]-2, numArr[1]-1], [numArr[0]-1, numArr[1]-2], [numArr[0]-2, numArr[1]+1] , [numArr[0] + 1, numArr[1]-2], [numArr[0]+1, numArr[1]], [numArr[0]+2, numArr[1]+1], [numArr[0]-1, numArr[1]+2], [numArr[0]+ 2, numArr[1]-1])
    
   const foo = assemble.filter((item)=>{
       return (item[0] > -1 &&  item[1] > -1  && item[0] < 8 &&  item[1] < 8)
    })
    return foo.length
}



console.log(chessKnight("c1"))