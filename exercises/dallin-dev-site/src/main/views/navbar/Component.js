import React from "react";
import { Link } from "react-router-dom";

export default function NavbarComponent(props) {
    return (
        <div className={props.state.navContainer} id="nav-container">
            <div className={props.state.linkContainer} id="link-container">
                <Link to="/" className="route-nav"><span className="nav-page">PROJECTS</span></Link>
                <Link to="/resume" className="route-nav"><span className="nav-page">RESUME</span></Link>
                <Link to="/contact" className="route-nav"><span className="nav-page">CONTACT</span></Link>
                <a target="_tab" href="https://www.linkedin.com/in/dallinbsmith/"><i className="nav-link fa fa-3x fa-linkedin"></i></a>
            </div>
            <div className = "logo-container">
                <img className = "dallin-logo" src={require("../../../main/assets/avatar/dallin-logo.png")} alt = "dallin-logo"></img>
            </div>
            <div className = "top-icons">
                <a href="https://www.linkedin.com/in/dallinbsmith/" className = "contact-icons linkedin-icon">.</a>
                <a href="mailto:dallinbsmith@gmail.com" className = "contact-icons mail-icon">.</a>
                <a href="https://github.com/dallinbsmith" className = "contact-icons git-icon">.</a>
            </div>
            <div className={props.state.currentPageContainer} id="current-page-container">
                <h1>{props.pageHeader}</h1>
            </div>
        </div>
    )
}
