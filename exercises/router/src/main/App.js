import React from "react";
import Navbar from "./Navbar.js";
import Home from "./views/Home.js"
import About from "./views/About.js"
import Contact from "./views/Contact.js"
import Services from "./views/Services.js"

import{Switch, Route} from "react-router-dom";

class App extends React.Component{
  render(){
    return (
        <div className = "meh">
          <Navbar/>
          <Switch>
            <Route exact path="/" component ={Home}/>
            <Route path="/about" component ={About}/>
            <Route path="/services" component ={Services}/>
            <Route path="/contact" component ={Contact}/>
          </Switch>
        </div>
    )
  }
}

export default App
