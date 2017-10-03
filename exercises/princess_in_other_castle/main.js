class Player {
    constructor(namePicked) {
        this.name = namePicked;
        this.totalCoins = 0;
        this.status = "Small";
        this.star = false;
        this.gameActive = true;
    }
    setName(namePicked) {
        namePicked = this.name;
    }
    gotPowerUp() {
        if (this.status === "Small") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Powered Up";
        }
    }

    gotHit() {
        if (this.status === "Powered Up") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Small";
        } else if (this.status === "Small") {
            this.status = "Dead";
            this.gameActive = false;

        }
    }
    addCoin() {
        this.totalCoins++;
    }
    print() {

        console.log (`Name: ${this.name} Status: ${this.status} Coins: ${this.totalCoins}`);
    }
}



function random() {
    var num = Math.floor(Math.random() * 3);
    if (num === 0) {
        marmar.gotHit();
    } else if (num === 1) {
        marmar.gotPowerUp();
    } else {
        marmar.addCoin();
    }
};

var marmar = new Player("Mario");
random();
marmar.print();
