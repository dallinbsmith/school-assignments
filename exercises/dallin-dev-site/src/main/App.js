import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./views/navbar/Navbar";
import Projects from "./views/projects/Projects";
import Resume from "./views/resume/Resume";
import Contact from "./views/contact/Contact"
import Footer from "./views/footer/Footer"

export default function App() {

    return (
        <div style={{width: "100vw", overflowX: "hidden"}}>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Projects}/>
                <Route path="/resume" component={Resume}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
            <Footer/>
        </div>
    )
}
