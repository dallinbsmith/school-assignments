import React from "react";
import {Link} from "react-router-dom";

export default function Landing(props) {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    }

    const linkStyles = {
        color: "white",
        textDecoration: "none"
    }

    return (
        <div style={containerStyle}>
            <Link to="/calculator" style={linkStyles}><h1>CALCULATOR</h1></Link>
            <Link to="/journal" style={linkStyles}><h1>JOURNAL</h1></Link>
            <Link to="/shitlist" style={linkStyles}><h1>SHIT LIST</h1></Link>
        </div>
    )
}
