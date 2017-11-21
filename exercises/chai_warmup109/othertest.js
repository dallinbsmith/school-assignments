var chai = require("chai");
var assert = chai.assert;

var fnx = require("../calc.js");

xdescribe("A calculator", function() {
    it("should add two numbers", function() {
        assert.equal(fnx.add(1, 2), 3);
        assert.equal(fnx.add(-1, -2), -3);
    });
    
    it("should subtract the second number from the first", function() {
        assert.equal(fnx.sub(1, 3), -2);
        assert.equal(fnx.sub(3, 2), 1);
        assert.equal(fnx.sub(1000, 2), 998);
    });
    
    it("should mulitply two numbers", function () {
        assert.equal(fnx.mult(1, 3), 3);
        assert.equal(fnx.mult(3, -2), -6);
        assert.equal(fnx.mult(-5, -25), 125);
        assert.equal(fnx.mult(1000, 2), 2000);
        assert.equal(fnx.mult(1000, 0), 0);
    });
    
    it("should divide the second number from the first", function() {
        assert.equal(fnx.divi(3, 1), 3);
        assert.equal(fnx.divi(6, -2), -3);
        assert.equal(fnx.divi(1000, 2), 500);
        assert.equal(fnx.divi(-100, -2), 50);
        assert.equal(fnx.divi(-10, -.5), 20);
        assert.equal(fnx.divi(0, -3), 0);
        assert.equal(fnx.divi(-10, 0), -Infinity);
        assert.equal(fnx.divi(1, 0), Infinity);
    });
    
});

describe("lastNums", function() {
    it("given two numbers, return true if the last digit is the same in both", function() {
        assert.isFalse(fnx.lastNums(11, 2));
        assert.isTrue(fnx.lastNums(-12, -2));
        assert.isFalse(fnx.lastNums(30, 21));
        assert.isTrue(fnx.lastNums(13.04, 104));
        assert.isTrue(fnx.lastNums(14, 103.4));
    });
        
});


//goes in JS file at bottom
//module.exports = {
//    add: add,
//    sub: subtract,
//    mult: multiply,
//    divi: divide,
//    lastNums: lastNums
//};



const chai = require("chai");
const assert = chai.assert;

const stringifyQuery = require("../main");

const tests = {
    endpoint: "http://localhost:8010/narwhals",
    case1: {},
    case2: {
        gender: "unicorn"
    },
    case3: {
        gender: "unicorn",
        color: "rainbow"
    }
};

describe("a url stringify fxn", () => {
    it("should return just the endpoint if there is no query", () => {
        assert.equal(
            stringifyQuery(tests.endpoint, tests.case1),
            "http://localhost:8010/narwhals"
        );
    });
    it("given one query, should return the endpoint and one query", () => {
        assert.equal(
            stringifyQuery(tests.endpoint, tests.case2),
            "http://localhost:8010/narwhals?gender=unicorn"
        );
        assert.equal(
            stringifyQuery(tests.endpoint, tests.case3),
            "http://localhost:8010/narwhals?gender=unicorn&color=rainbow"
        );
    });
    it("given multiple queries, should return the endpoint, query1 '&' query2, etc", () => {
        assert.equal(
            stringifyQuery(tests.endpoint, tests.case3),
            "http://localhost:8010/narwhals?gender=unicorn&color=rainbow"
        );
    });
});

//module.exports = stringifyQuery;

const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;

const twoSum = require("../app");

const tests = {
    case0: {
        arr: [1, 2, 3],
        target: 4
    },
    case1: {
        arr: [1, 2, 3],
        target: 3
    },
    case2: {
        arr: [1, 2, 3],
        target: 6
    }
};

describe("a twoSum function", () => {
    it("should return an array of the two indices of elements that add to the target", () => {
        assert.deepEqual(twoSum(tests.case0.arr, tests.case0.target), [0, 2]);
        assert.deepEqual(twoSum(tests.case1.arr, tests.case1.target), [0, 1]);
    });

    it("should return a notification if no two elements in the array add to the target", () => {
        assert.typeOf(twoSum(tests.case2.arr, tests.case2.target), "string");
    });
});





//


const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;

const shrink = require("../main.js");

describe("a shrink fxn", () => {
    it("should accept an integer", () => {
        assert.equal(shrink(9) % 1, 0);
        assert.equal(shrink(10) % 1, 0);
        assert.equal(shrink(11) % 1, 0);
    });

    it("should return the number of times the process takes to reduce input number to 1", () => {
        assert.equal(shrink(9), 2);
        assert.equal(shrink(3), 1);
        assert.equal(shrink(10), 2);
        assert.equal(shrink(1), 0);
    });
});



// gets posted module.exports = shrink;


const chai = require("chai");
const assert = chai.assert;
const adjDiff = require("../main.js");

describe("an adjacent string checker", () => {
    it("should find the 3 longest adjacent strings", () => {
        assert.deepEqual(adjDiff(["a", "b", "c", "dd"]), ["b", "c", "dd"]);
        assert.deepEqual(adjDiff(["aaa", "b", "c", "dd"]), ["aaa", "b", "c"]);
        assert.deepEqual(adjDiff(["a", "bbb", "c", "dd"]), ["bbb", "c", "dd"]);
    });

    it("should not return undefined as a string", () => {
        assert.notInclude(adjDiff(["something"]), ["undefined"]);
    });

    it("should return all strings if there are fewer than 3 givn", () => {
        assert.deepEqual(adjDiff(["something"]), ["something"]);
        assert.deepEqual(adjDiff(["something", "else"]), ["something", "else"]);
        assert.deepEqual(adjDiff([]), []);
    });
});cons