//function stuff(cars){
//    for (var i = 0; i < cars.length; i++) {  
//  console.log(`${cars[i]} goes vroom`);
//}
//}
//console.log(stuff([1,2,3,4,5,6]));

var cars = [{
    "name": "red car",
    "year": 2005,
    "model": "ford"
}, {
    "car": "blue car",
    "year": 2007,
    "model": "chevy"
}, {
    "car": "purple car",
    "year": 2008,
    "model": "ford"
}, {
    "car": "yellow car",
    "year": 2001,
    "model": "ford"
}];



//cars.forEach(function(car){
//   console.log(car+ " go vroom"); 
//});
//
//var angryCars = [];
//
//cars.map(function(car){
//    angryCars.push(car.toUpperCase())
//});
//
//console.log(angryCars);
//
//
//var newCars = [];
//
//newCars.filter(function(value, index, array){  
//  if (cars.year > 2005){
//    newCars.push(car);
//  }
//});
//
//console.log(newCars);
//


//for (var i = 0; i < cars.length; i++) {  
//  if (cars[i].year > 2005){
//    newCars.push(cars[i]);
//  }
//}

//var newCars = cars.filter(function(car){
//    return car.year > 2004;
//});
//
//
//console.log(newCars);

//for (var i = 0; i < cars.length; i++) {  
//  if (cars[i].model === "E150"){
//    var coolVan = cars[i];
//    break;
//  }
//}

//var findingCars = cars.find(function(car){
//    return (car.model === "E150");
//});
//            
//            
//console.log(findingCars);


//var someCars = cars.some(function(car){
//    return (car.model === "E150");
//});
//            
//            
//console.log(someCars);


//var everyCar = cars.every(function(car){  
//           return (car.model === "E150")
//});
//
//console.log(everyCar);


//cars.reduce(function(allCars, car){
//    if (car.model in allCars === "ford"){
//        numberOfFords++;
//    }else if(car.model in allCars === "chevy"){
//        numberOfChevys++;
//    }else{
//        allCars[car] = 1;
//    }
//     carTotals.push(numberOfChevys + );
//});

//function carStuff() {
//    for (var i = 0; i < cars.length; i++) {
//        if (cars[i].model === "ford") {
//            numberOfFords++;
//        }
//        else if (cars[i].model === "chevy") {
//            numberOfChevys++;
//        }
//    }
//}
//carStuff();
//var carTotals = {
//    numberOfFords: numberOfFords,
//    numberOfChevys: numberOfChevys
//}
// console.log(carTotals);
//
//
//var carReduce = cars.reduce(function(allCars, car){
//    
//});


//var carTotals = cars.reduct(function (runningTotalsObj, currentCar) {
//    if (currentCar.model === "ford") {
//        runningTotalsObj.numFords++;
//    } else {
//        runningTotalsObj.numChevys++;
//    }
//
//    return runningTotalsObj;
//}, { numFords: 0,
//    numChevys:0})
//
//
var carTotals = cars.reduce(function (runningTotalsObj, currentCar) {
    if (currentCar.model === "ford") {
        if (runningTotalsObj.numFords === undefined) {
            runningTotalsObj.numFords = 1;
        } else {
            runningTotalsObj.numFords++;
        }
    } else if (runningTotalsObj.numChevys === undefined) {
        runningTotalsObj.numChevys = 1;
    } else {
        runningTotalsObj.numChevys++;
    }

    return runningTotalsObj;
}, {})

console.log(carTotals);


//cars.reduce(function (runningTotalofCars, currentCar){ 
//    
//        if (currentCar.model === "chevy") {
//            runningTotalofCars.numberOfChevys++;
//        } else if (currentCar.model === "ford") {
//            runningTotalofCars.numberOfFords++;
//        }
//    },{ numberOfChevys: 0,
//        numberOfFords: 0});
//
//console.log(runningTotalofCars);


//var answer = cars.reduce(function (runningTotals, currentCar) {
//            if (currentCar.model === "chevy") {
//                if (runningTotals.numberOfChevys === undefined) {
//                    runningTotals.numberOfChevys = 1;
//                } else {
//                    runningTotals.numberOfChevys++;
//                }
//            }
//            if (currentCar.model === "ford") {
//                if (runningTotals.numberOfFords === undefined) {
//                    runningTotals.numberOfFords = 1;
//                } else {
//                    runningTotals.numberOfFords++;
//                }
//
//
//
//            }
//}, {});


var answer = cars.reduce(function (runningTotals, currentCar) {
        if (currentCar.model === "chevy") {
            if (runningTotals.numberOfChevys === 0) {
                return runningTotals.numberOfChevys = 1;
            } else {
                return runningTotals.numberOfChevys++;
            }
        } else if (currentCar.model === "ford") {
            if (runningTotals.numberOfFords === 0) {
                return runningTotals.numberOfFords = 1;
            } else {
                return runningTotals.numberOfFords++;
            }
        }
    }, {
        numberOfChevys: 0,
        numberOfFords: 0
    } 
    );

console.log(answer);