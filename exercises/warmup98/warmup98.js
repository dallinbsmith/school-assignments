//for (var i = 1; i <= 100; i++) {
//    console.log(i);
//}
//
//for (var i = 100; i >= 0; i--) {
//    console.log(i);
//}
//
//for (var i = 0; i <= 100; i++) {
//    if (i % 2 === 0){
//        console.log(i);
//    }
//}
//
//for (var i = 100; i >= 0; i--) {
//    if (i % 2 === 1) {
//        console.log(i);
//    }
//}




//var powerRangers = ["Trini", "Kimberly", "Jason", "Tommy", "Zack", "Kimberly", "Kimberly"];
//var kimberlyArray = [];
//for (var i = 0; i < powerRangers.length; i++){
//    if (powerRangers[i] === "Kimberly"){
//        kimberlyArray.push(i);
//    }
//}
//    console.log(kimberlyArray);
//    



var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//
var lastVegetable = vegetables.pop();
//console.log(vegetables)

fruit.shift();
//console.log(fruit);

var orangeIndex = fruit.indexOf("orange");

//console.log(fruit.indexOf("orange"));

fruit.push(orangeIndex);
//console.log(fruit);

//console.log(vegetables.length);

vegetables.push(vegetables.length);
//console.log(vegetables);

var food = fruit.concat(vegetables);
//console.log(food);

food.splice(4, 2);
//console.log(food);

food.reverse();
//console.log(food);

var answer = food.toString();
console.log(answer);

