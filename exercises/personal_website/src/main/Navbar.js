import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar-container">
            <Link to="/"className = "home">HOME</Link>
            <Link to="/about" className = "resume">RESUME</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/services">SERVICES</Link>
        </div>
    )
}

export default Navbar;
