// Given a string and a non-negative int n, we'll say that the "front" of the string is the first 3 chars,
// or whatever is there if the string is less than length 3. Return n copies of the "front"
//
// Use TDD (Test-driven development) in solving this problem.


// frontStr = (str, num) => {
//     var stringIntArr = [];
//     if (str.length >= 3){
//       var newArray = str.split("");
//       for (let i = 0; i < num; i++){
//       stringIntArr.push(newArray[0]+newArray[1]+newArray[2]);
//     }
//   }else if(str.length =2){
//     for (let i = 0; i < num; i++){
//     stringIntArr.push(newArray[0]+newArray[1]);
//   }else{
//     for (let i = 0; i < num; i++){
//     stringIntArr.push(newArray[0]);
//   }
//   console.log(...stringIntArr);
// }

// stringReverse = (str) => str.split("").reverse().join("");
//
// console.log(stringReverse("whatever"));



frontStr = (str, num) => {
  const strSubstring = str.substring(0,3);
  let newArray = [];
  for (let i =0; i < num; i++){
    newArray.push(strSubstring);
  }
  console.log(newArray.join(""));
}


frontStr("whatever", 3);


module.exports = frontStr
