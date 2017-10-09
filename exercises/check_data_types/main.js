const array = [true, true, true];
let arr = [[1,2,3],["a","b","c"],[true, true, true]]



//ONE WORKING METHOD
// const result = [].concat(...arr);
// const type = typeof result[0];
// return result.every(item => type === typeof item);



// ANOTHER WORKING METHOD

// let newArray = [];
// for (var i = 0; i < arr.length; i ++){
//     newArray = newArray.concat(arr[i]);
// }
//
// for (let i = 0; i < newArray.length - 1; i++){
//   if(typeof newArray[i] !== newArray[i+1]){
//     return false;
//   }
//
// }return true;



// function getItTogether(multiDArrayObj) {
//       multiDArrayObj.join(" ");
// }
// function getItTogether()
// var merged = [].concat.apply([], arr);


// const multiDSortString =  array.every(function(obj){
//       return typeof obj === "string"
// });
//
// const multiDSortNumber =  array.every(function(obj){
//       return typeof obj === "number"
// });
//
// const multiDSortBoolean =  array.every(function(obj){
//       return typeof obj === "boolean"
// });



console.log(getItTogether(arr));



// let arr = [[1,2,3],["a","b","c"],[true, true, true]]
  //returns false (contains more than one data type)

let multiD2 = [[true,false,true],[false,false,true]]
  //returns true (each data type is a boolean)
