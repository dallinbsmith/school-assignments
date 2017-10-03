var readlineSync = require('readline-sync');


function validateIP(ip) {
    const input = readlineSync.question('Please Enter IP Address');
    const ipArray = [];
//    const ipArray = input.split((/./)[1]);
    const separatedString= input.substring(input.indexOf('.')+1)

    console.log(separatedString);

}


validateIP();




//module.exports = {
//    test: test,
//}


    //    while (!isNaN(input)) {
//        const ipArray = input.split("");
//        while (ipArray.length < 19 && ipArray.length > 6) {
//            ipArray[]
//        }
//    }