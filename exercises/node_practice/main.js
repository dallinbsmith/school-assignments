var nums = require ("./other_functions");
var mult = require ("./multiply");
var add = require ("./add");
var divide = require ("./divide");
var subtract = require ("./subtract");

function doallthethings(y,z){
  const m = mult(y,z);
  const s = subtract(y,z);
  const a = add(y,z);
  const d = divide(y,z);
  mult(d,a)
}

doallthethings(6,5)
