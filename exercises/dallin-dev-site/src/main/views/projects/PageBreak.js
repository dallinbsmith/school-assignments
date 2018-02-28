import React from "react";
import glamorous from "glamorous";

function PageBreak() {
    /////PHOTOS///////
    const bandwpagebreak = require("../../assets/bandw-page-break.png");

    const PageBreak = glamorous.div({
        width: "100vw",
        height: "80px",
        background: `url(${bandwpagebreak}) no-repeat center`,
        backgroundSize: "cover",
        position: "relative",
        alignSelf: "flex-end",
    });

    return <PageBreak/>
}
export default PageBreak
