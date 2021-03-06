import React from "react";
import Navbar from "./Navbar";
import Home from "./views/Home";
import About from "./views/about/Container";
import Contact from "./views/Contact";
import ServicesContainer from "./views/services/Container";
import Footer from "./Footer";

import {Switch, Route} from "react-router-dom";

function App() {
    return (
        <div className="app-container">
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            <Route path="/services" component={ServicesContainer}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;
