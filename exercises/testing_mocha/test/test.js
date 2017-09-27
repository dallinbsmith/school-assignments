var chai = require("chai");
var assert = chai.assert;

var calculator = require("../calc.js");

describe("A calculator", function(){
    
    it("should add two numbers", function (){
        assert.equal(calculator.add(1, 2), 3);
        assert.equal(calculator.add(-1,-2), -3);
        
    });
    
        it("should subtract two numbers", function (){
        assert.equal(calculator.sub(5, 2), 3);
        assert.equal(calculator.sub(4,3), 1);
        
    });
});