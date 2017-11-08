function deleteTheSames(arr1, arr2){
  let uniques = [];
  const combined = arr1.concat(arr2);
    let sorted = combined.sort(function(a, b){return a-b})
    for (let i = 0; i <sorted.length; i++){
      if (sorted[i] !== sorted[i+1] && sorted[i] !== sorted[i-1]){
        uniques.push(sorted[i])
      }
    }
    console.log(uniques);
}

deleteTheSames([1,2,3], [2,3,4]);




// newObj = [];
// for (let i = 0; i < arr1.length; i++){
//   for (let j = 0; j <arr2.length; j++){
//     if (arr1[i] !== arr2[j]){
//       newObj.push(arr1[i])
//     }
//   }
// }
// console.log(newObj)
// }


// function deleteTheSames(arr1, arr2){
//   newObj = [];
//   const combined = arr1.concat(arr2);
//     for (let i =0; i < combined.length; i++){
//         if (newObj.indexOf(combined[i]) === -1){
//                  newObj.push(combined[i]);
//         }
//     }
// console.log(newObj);
// }
