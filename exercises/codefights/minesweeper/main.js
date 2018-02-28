function minesweeper(matrix) {
    var mineNum = [];
    for (var row = 0; row < matrix.length; row++) {
        mineNum[row] = [];
        for (var col = 0; col < matrix[row].length; col++) {
            var cellNum = 0;
            
            var startRow = (row - 1 >= 0) ? row - 1 : row;
            var endRow = (row + 1 < matrix.length) ? row + 1 : row;
            
            for (var i = startRow; i <= endRow; i++) {
                var startCol = (col - 1 >= 0) ? col - 1 : col;
                var endCol = (col + 1 < matrix[row].length) ? col + 1 : col;
                
                for (var j = startCol; j <= endCol; j++) {
                    if (matrix[i][j] && !(i == row && j == col)) {
                        cellNum++;
                    }
                }
            }
            
            mineNum[row][col] = cellNum;
        }

    }
    
    return mineNum;
}




//
//function minesweeper(matrix) {
//    field = [];
//    for (i = 0; i<matrix.length; i++){
//        var line = [];
//        for (j = 0; j < matrix[i].length; j++){
//            line.push(0);
//        }
//        field.push(line)
//    }
//        for (i = 0; i<matrix.length; i++){
//            for (j = 0; j < matrix[i].length; j++){
//            if (matrix[i][j] === true && i === 0 && j === 0 ){
//                field[i+ 1][j]++  
//                field[i][j + 1]++ 
//                field[i + 1][j + 1]++ 
//             }else if (matrix[i][j] === true && i === 0 && j === matrix[i].length-1){
//                field[i-1][j]++ 
//                field[i][j -1]++ 
//                field[i - 1][j - 1]++     
//            }else if (matrix[i][j] === true && i === matrix.length -1 && j === matrix[i].length-1){
//                field[i-1][j]++ 
//                field[i][j -1]++ 
//                field[i - 1][j - 1]++ 
//                
//            }if (matrix[i][j] === true && i < matrix.length -1 && j > 0 && j < matrix[i].length-1){
//                field[i-1][j]++ 
//                field[i+ 1][j]++ 
//                field[i][j -1]++ 
//                field[i][j + 1]++ 
//                field[i + 1][j + 1]++ 
//                field[i - 1][j - 1]++ 
//                field[i + 1][j - 1]++ 
//                field[i - 1][j + 1]++
//            } if (matrix[i][j] === true && i > 0 && i < matrix.length -1 ){
//                field[i-1][j]++ 
//                field[i+ 1][j]++ 
//                field[i][j -1]++ 
//                field[i][j + 1]++ 
//                field[i + 1][j + 1]++ 
//                field[i - 1][j - 1]++ 
//                field[i + 1][j - 1]++ 
//                field[i - 1][j + 1]++
//            }
//        }   
//    } 
//    return field
//}


console.log(minesweeper([[true,false,false,true], 
 [false,false,true,false], 
 [true,true,false,true]]))
