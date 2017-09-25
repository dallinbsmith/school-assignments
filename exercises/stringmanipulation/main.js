var readlineSync = require('readline-sync');

function run(string1, string2) {
    var userName = readlineSync.question('May I have your name? ');
    var greeting = ('Hi ' + userName + '!').toUpperCase();
    var conCatt = string1.concat(string2);
    console.log(greeting);
    console.log("There are " + userName.length + " characters in your name!");
    console.log(conCatt);
        if (string1.length + string2.length > 20) {
            console.log(conCatt.slice(conCatt.length/2, conCatt.length));
            var typingIndex = readlineSync.question('Which Index do you want to start typing from?');
            console.log(conCatt.slice(typingIndex, conCatt.length));
    }
}
run("weinerweinerweinerweiner", "buttbuttbuttbutt");
