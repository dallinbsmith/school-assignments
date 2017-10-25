import React from "react";
import {Link} from "react-router-dom"

function Navbar(props){
  return(
    <div>
      <Link to = "/">Home</Link>
      <Link to = "/party">Party</Link>
      <Link to = "/danceparty">Dance Party</Link>
      <Link to = "/funparty">Fun Party</Link>
    </div>
  )
}

export default Navbar;
