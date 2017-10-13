// function balanceParenth(str){
//   parenthArray = [];
//   const splitArr = str.split("")
//   for (let i = 0; i <splitArr.length; i++){
//      if (splitArr[i] === "(")
//       for (let j = 0; j<splitArr.length; j++){
//         if (splitArr[j] === ")"){

//           parenthArray.push(splitArr[i])
//           parenthArray.push(splitArr[j])
//           break
//         }else{
//           console.log("unbalanced");
//           return false;
//         }
//       }
//   }
//   console.log(parenthArray);
// }
//
// balanceParenth("(())")



function balanceParenth(str){
  const splitArr = str.split("")
  const sorted = splitArr.filter(function(obj){
      return obj === ")" || obj === "("
  });
  for (let i = 0; i <sorted.length; i++){
      if (sorted[0] === ")" || sorted[sorted.length] === "("){
        console.log("unbalanced");
        return false
      }else if (sorted.length % 2 === 1){
      console.log("unbalanced");
    return false
      }
  }
  const sortedLeft = sorted.filter(function(obj){
    return obj === "("
  });
  const sortedRight = sorted.filter(function(obj){
    return obj === ")"
  });
  if (sortedLeft.length === sortedRight.length){
    console.log("balanced")
    return true
  }else{
    console.log("unbalanced");
    return false
  }
}

balanceParenth("stuff(aboutO09)))")
