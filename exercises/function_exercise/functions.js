//function sumFunction(x, y) {
//    return x + y;
//}
//
//console.log(sumFunction(5, 8));

//function biggestFunction(x, y, z) {
//   return Math.max(x, y, z);
//}
//
//console.log(biggestFunction(12, 15, 42));

//function evenOdd(x) {
//    if (x % 2 === 0){
//        return "even";
//    }else{
//        return "odd";
//    }
//} 
//
//console.log(evenOdd(42))

//function stringLength(word) {
//    if (word.length <= 20) {
//        return word.concat(word);
//    }else{
//        return word.slice(0, word.length/2);
//    }
//    
//}
//
//console.log(stringLength("Weiners and butts. Weiners and butts. Weiners and butts."));

//function fibonacci(n) {
//    for (i = n; n <= 0; i--){
//        return n + n - 1
//    }
//    
//}



function quadFormula(a, b, c) {
    var quadArray = [];
    var x1 = 4;
    var x2 = 6;
//    var x1= (-b/2/a+Math.pow(Math.pow(b,2)-4*a*c,0.5)/2/a);
//    var x2= (-b/2/a-Math.pow(Math.pow(b,2)-4*a*c,0.5)/2/a); 
    quadArray.push(x1, x2);
}
quadFormula(4, 5, 6);
console.log(quadArray);