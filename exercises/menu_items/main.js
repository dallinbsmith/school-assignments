var menuItems = [];


var boogerBurger = {
    name: "Booger Burger",
    price: 10,
    description: "yummy burger from boogers"
    
}

var truckoTaco = {
    name: "Trucko Taco",
    price: 12,
    description: "yummy Taco from Truckos"
    
}

var buttoBurrito = {
    name: "Butto Burrito",
    price: 13,
    description: "yummy Burrito from butts"
    
}

function MenuItem(name, price, description){
    this.name = name;
    this.price = price;
    this.description = description;
//    this.printEmployeeForm = function(){
//        menuItems.push({Name : name,Price : price, Description : description});
    
}

var fungalFumes = new MenuItem("Fun Fungus", 14, "Great Fungus from the Fun");
var corruptCow = new MenuItem("Corrupt Cow", 8, "It\'s a cow that doesn\'t taste good");
var terribleTurtle = new MenuItem("Terrible Turtle", 22, "For those that like to eat Turtles");


    menuItems.push(terribleTurtle);
    menuItems.push(corruptCow);
    menuItems.push(fungalFumes);
    menuItems.push(boogerBurger);
    menuItems.push(truckoTaco);
    menuItems.push(buttoBurrito);


console.log(menuItems);

for (var i = 0; i < menuItems.length; i ++){
document.getElementById("body").innerHTML += "<h3>" + menuItems[i].name + "</h3>" + "<h4>" + menuItems[i].price + "</h4>" + "<h4>" + menuItems[i].description + "</h4>";}