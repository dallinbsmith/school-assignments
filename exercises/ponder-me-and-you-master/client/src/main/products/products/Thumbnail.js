import React from "react";
import glamorous from "glamorous";
import { colors, mediaQueries } from "../../../styles/global";
import { memes } from "../../../assets/pictures";

export default function Thumbnail(props) {
    ///////// STYLES \\\\\\\\\\
    const MemeThumbnail = glamorous.img({
        display: "inline",
        height: "250px",
        width: "250px",
        border: `5px solid ${colors.cream}`,
        [mediaQueries.medium]: {
            height: "300px",
            width: "300px",
        },
    });
    ////////////////////////////////

    // Thumbnail called in Products/Container
    return (
        <MemeThumbnail src={memes[props.meme.pictureUrl]}/>
    );
}
