const chai = require("chai");
const assert = chai.assert;

////////////////////////////
// Test helper functions \\
////////////////////////////

// Format pictureUrl so it's saved in DB with correct param setting
const _formatUrl = (url) => {
    let shareUrl = url.substring(0, url.indexOf("?") + 1);
    return shareUrl += "raw=1";
}

let urls = {
    one: "https://www.dropbox.com/s/ubs439m91ubcxhe/be-light.png?dl=0",
    two: "https://www.dropbox.com/s/olobd3m0ws718tr/talk-later.png?raw=1"
};

describe("#_formatUrl", () => {
    it("Should remove url param(s) and replace with 'raw=1'", () => {
        assert.equal(_formatUrl(urls.one), "https://www.dropbox.com/s/ubs439m91ubcxhe/be-light.png?raw=1");
        assert.equal(_formatUrl(urls.two), "https://www.dropbox.com/s/olobd3m0ws718tr/talk-later.png?raw=1");
    });
});
