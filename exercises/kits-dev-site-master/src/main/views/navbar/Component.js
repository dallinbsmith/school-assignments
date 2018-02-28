import React from "react";
import { Link } from "react-router-dom";

export default function NavbarComponent(props) {
    return (
        <div className={props.state.navContainer} id="nav-container">
            <div className={props.state.hiContainer} id="hi-container">
                <h1 className="hi-there">Hi, there.</h1>
                <h1 className="im-kit">I'm Kit and I'm a web developer</h1>
            </div>
                <h1 className={props.state.kit} id="kit">Kit</h1>
            <div className={props.state.currentPageContainer} id="current-page-container">
                <h1>{window.location.pathname === "/resume" ? "RESUME" : "RECENT PROJECTS"}</h1>
            </div>
            <div className={props.state.linkContainer} id="link-container">
                {window.location.pathname === "/resume" ?
                <Link to="/" className="route-nav"><span className="nav-page">PRO<span style={{display: "block"}}>JECTS</span></span></Link> :
                <Link to="/resume" className="route-nav"><span className="nav-page">RES<span style={{display: "block"}}>UME</span></span></Link>
                }
                <a target="_tab" href="https://github.com/noblepaper"><i className="nav-link fa fa-3x fa-github"></i></a>
                <a target="_tab" href="https://www.linkedin.com/in/kitmasaracchia/"><i className="nav-link fa fa-3x fa-linkedin"></i></a>
            </div>
        </div>
    )
}
