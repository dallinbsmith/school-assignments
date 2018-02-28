import React from "react";
import glamorous from "glamorous";

export default function MobilePic(props) {
    const MobilePic = glamorous.div({
        width: "219px",
        height: "465px",
        background: `url(${props.imgUrl}) no-repeat center`,
        backgroundSize: "cover",
        position: "relative",
        zIndex: "1",
        alignSelf: "flex-end",
        margin: "15px",
    });

    return <MobilePic/>
}
