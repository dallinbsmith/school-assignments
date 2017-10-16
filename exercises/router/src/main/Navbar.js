import React from "react";
import {Link} from "react-router-dom";

function Navbar(props){
  return(
    <div className = "nav">
      <Link to = "/">Home</Link>
      <Link  to = "/about">About</Link>
      <Link to = "/contact">Contact</Link>
      <Link to = "/services">Services</Link>
    </div>
  )
}

export default Navbar;
