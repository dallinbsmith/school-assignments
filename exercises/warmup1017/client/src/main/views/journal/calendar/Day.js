import React from "react";

export default function Day(props) {
    const dayStyles = {
        border: "1px solid white",
        color: "white",
        padding: "5px",
        fontSize: "1em",
        margin: "5px",
        height: "25px",
        width: "25px",
        display: "inline"
    }

    const blankDayStyles = {
        backgroundColor: "grey",
        color: "grey",
        padding: "5px",
        fontSize: "1em",
        margin: "5px",
        height: "25px",
        width: "25px",
        display: "inline"
    }

    return (
            <h3 style={props.day === "" ? blankDayStyles : dayStyles}>
                {props.day === "" ? props.day : props.day + 1}
            </h3>
    )
}
