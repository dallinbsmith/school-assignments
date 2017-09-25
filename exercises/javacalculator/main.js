var readlineSync = require('readline-sync');

var num1 = readlineSync.question('What is the first number?');
var num2 = readlineSync.question('What is the second number?');
var operation = readlineSync.question('Do you want to \'add\', \'subtract\', \'divide\', or \'multiply\'?');

function addStuff(num1, num2) {
    return (parseInt(num1) + parseInt(num2));
}


function multiplyStuff(num1, num2) {
    return (parseInt(num1) * parseInt(num2));
}

function divideStuff(num1, num2) {
    return (parseInt(num1) / parseInt(num2));
}

function subtractStuff(num1, num2) {
    return (parseInt(num1) - parseInt(num2));
}

function calculator() {
//                    console.log("Please Enter \'add\', \'subtract\', \'divide\', or \'multiply\'.");
    if (operation === "add") {
        console.log(addStuff(num1, num2));
    } else if 
        (operation === "divde") {
            console.log(divideStuff(num1, num2));
        } else if 
            (operation === "subtract") {
                console.log(subtractStuff(num1, num2));
            } else if 
                (operation === "multiply") {
                    console.log(multiplyStuff(num1, num2));
                }
            }
       

                calculator();
