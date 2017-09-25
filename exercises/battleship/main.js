var readlineSync = require('readline-sync');



var largeGrid = [];
var hitShips = 0;
var calledLocations = [];

createGrid(10, 10);

function createGrid(x, y) {
    for (var i = 0; i < x; i++) {
        var smallGrid = []
        for (var j = 0; j < y; j++) {
            smallGrid.push(0);


        }
        largeGrid.push(smallGrid);
    }
}

console.log("Sink 5 ships to Win!!")
shoot();

function shoot() {
    while (hitShips < 5) {

        var xcoord = readlineSync.question('Please fire first coordinate between 1 and 10 (x-coordinate)');
        var ycoord = readlineSync.question('Please fire second coordinate between 1 and 10 (y-coordinate)');
        if ((xcoord === "1" || xcoord === "2" || xcoord === "3" || xcoord === "4" || xcoord === "5" || xcoord === "6" || xcoord === "7" || xcoord === "8" || xcoord === "9" || xcoord === "10") && (ycoord === "1" || ycoord === "2" || ycoord === "3" || ycoord === "4" || ycoord === "5" || ycoord === "6" || ycoord === "7" || ycoord === "8" || ycoord === "9" || ycoord === "10")) {
            var newloca = new Location(true, false);

            function Location(hit, alreadyHit) {
                this.hit = hit;
                this.alreadyHit = alreadyHit;
                this.isShip = function () {
                    if (Math.random() < .5) {
                        return false
                    }
                }
            }

            if (newloca.isShip() === false) {
                if ((largeGrid[xcoord - 1][ycoord - 1] === "X") ||(largeGrid[xcoord - 1][ycoord - 1] === "M")) {
                        console.log("You already used that number. Please enter more coordinates.");
                        shoot();
                    } else {
                        largeGrid[xcoord - 1][ycoord - 1] = "X";
                        hitShips++;
                    }

                }
                else {
                    largeGrid[xcoord - 1][ycoord - 1] = "M";
                }
                console.log(largeGrid);
            } else {
                console.log("Please make sure your entries are numbers between 1 and ten");
                shoot();
            }

        }
        console.log("YOU SUNK ALL THE SHIPS!!")
    }
