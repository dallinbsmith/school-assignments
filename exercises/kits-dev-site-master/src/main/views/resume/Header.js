import React from "react";
import glamorous from "glamorous";

export default function Header() {
    const backgroundImg = require("../../assets/header_resume.png")

    const mediaQueries = {
        small: "@media screen and (max-width: 991px)"
    }

    const HeaderPic = glamorous.div({
        background: `url(${backgroundImg}) no-repeat center`,
        backgroundSize: "cover",
        height: "500px",
        width: "100%",
        [mediaQueries.small]: {
            height: "250px"
        }
    });

    return (
        <HeaderPic></HeaderPic>
    )
}
