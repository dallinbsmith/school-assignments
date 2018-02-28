function boxBlur(image) {
    const moneyMakers = []
    
    for(i = 0; i<image.length; i++){
        if (i > 0 && i < image.length - 1){
            moneyMakers.push([])
        }
        for(j = 0; j< image[i].length; j++){
            if (i > 0 && j > 0 && i < image.length - 1 && j < image[i].length - 1){
                let currentAvg = Math.floor((image[i][j] + image[i-1][j] + image[i+ 1][j] + image[i][j -1] + image[i][j + 1] + image[i + 1][j + 1] + image[i - 1][j - 1] + image[i + 1][j - 1] + image[i - 1][j + 1])/9)
                moneyMakers[i-1].push(currentAvg)
            }
        }
    }
    return moneyMakers
}



console.log(boxBlur ([[7, 4, 0, 1], 
         [5, 6, 2, 2], 
         [6, 10, 7, 8], 
         [1, 4, 2, 0]]))