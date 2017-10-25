import React from "react";

function AComponent(props) {
    const images = {
        background: `url(${props.profile.img}) no-repeat center`,
        backgroundSize: `cover`
    }

    return (
        <div>
            <h2>{props.profile.name}</h2>
            <h4>{props.profile.number}</h4>
        </div>
    )
}

export default AComponent;
