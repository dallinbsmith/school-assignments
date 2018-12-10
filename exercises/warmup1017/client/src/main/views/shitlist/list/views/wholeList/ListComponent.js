import React from "react";
import moment from "moment";
import {Link} from "react-router-dom";

export default function ListComponent(props) {
    // DON'T FORGET TO UPDATE THIS SCHEMA TO NOT INCLUDE THE DATE
    const date = moment(props.shit.date, "YYYYMMDD").fromNow();

    const nameStyles = {
        margin: "0"
    }

    const dateStyles = {
        margin: "0"
    }

    const locationStyles = {
        margin: "0 0 10px 0"
    }

    const buttonStyles = {
        outline: "none",
        backgroundColor: "transparent",
        color: "green",
        fontSize: "1em",
        textDecoration: "none",
        cursor: "pointer",
        marginTop: "15px"
    }

    return (
        <div>
            <h1 style={nameStyles}>{props.shit.name}</h1>
            <h3 style={dateStyles}>{date}</h3>
            <h3 style={locationStyles}>{props.shit.location}</h3>
            <Link to={`/shitlist/${props.shit._id}`} style={buttonStyles}>MORE SHIT >> </Link>
        </div>
    )
}
