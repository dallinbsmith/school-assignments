const chai = require("chai");
const assert = chai.assert;

describe("Front String", () => {
      it("should repeat all the characters if there are 3 or fewer", ()=>{
        assert.equal(frontStr("it", 1), "it");
        assert.equal(frontStr("it", 2), "itit");
      });
      it("should only repeat the first three characters if there are more than three", ()=>{
        assert.equal(frontStr("bla", 4), "blablablabla");
        assert.equal(frontStr("blah", 3), "blablabla");
      });
});
