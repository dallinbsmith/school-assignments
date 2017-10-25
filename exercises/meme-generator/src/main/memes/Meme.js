import React from "react";

function Meme(props) {

    return (
        <div>
            <div>
                <h1>{props.meme.topText}</h1>
                <h1>{props.meme.bottomText}</h1>
            </div>
        </div>
    )
}

export default Meme;
