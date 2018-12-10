function differentSquares(matrix) {
    const arr = [];
    var seen = {};
    for(i= 0; i< matrix.length - 1; i++){
        for(j = 0; j <matrix[i].length - 1; j++){
            arr.push([[matrix[i][j] , matrix[i+1][j]], [matrix[i][j + 1] , matrix[i+1][j + 1]]])
        }
    }
      return arr.filter((item) => seen.hasOwnProperty(item) ? false : (seen[item] = true)).length                
}







console.log(differentSquares([[1, 2, 1],
                              [2, 2, 2],
                              [2, 2, 2],
                              [1, 2, 3],
                              [2, 2, 1]]))
