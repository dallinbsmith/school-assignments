function countingValleys(bribes, len1, arr1, len2, arr2) {
    arrFin = []
    for(let i = 1; i <= len1; i++){
        arrFin.push(i)
    }
    function array_move(arr, old_index, new_index) {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        console.log(arr)
        return arr; // for testing
    };
        for (let i = 0; i <= 2; i++){
        while (arrFin[i] !== arr1[i]) {
            console.log(arrFin)
            console.log(arr1)
            array_move(arrFin, arrFin[i-1], arrFin[i])
        }    
    }
}

console.log(countingValleys(2, 5, [2,1,5,3,4], 5, [2,5,1,3,4]))