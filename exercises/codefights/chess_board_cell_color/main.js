function chessBoardCellColor(cell1, cell2) {
    const alpha = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const c1color = (((cell1[1] % 2) === 1 && (alpha.indexOf(cell1[0]) % 2 === 0)) || ((cell1[1] % 2) === 0 && (alpha.indexOf(cell1[0]) % 2 === 1)))? "brown" : "tan";
    const c2color = (((cell2[1] % 2) === 1 && (alpha.indexOf(cell2[0]) % 2 === 0)) || ((cell2[1] % 2) === 0 && (alpha.indexOf(cell2[0]) % 2 === 1)))? "brown" : "tan";
    return c1color === c2color
}

//
//function chessBoardCellColor(cell1, cell2) {
//  var c1 = cell1.split("");
//  var c2 = cell2.split("");
//return c1[0].charCodeAt(0) 
//        
//}




console.log(chessBoardCellColor("H1", "C3"))