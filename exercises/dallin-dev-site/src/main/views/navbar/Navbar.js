import React from "react";
import NavbarComponent from "./Component";

export default class Navbar extends React.Component {
    // NAVBAR STYLES IN INDEX.CSS TO ACCOMMODATE NAVBAR SCROLL FUNCTIONALITY
    constructor() {
        super();
        this.state = {
            navContainer: "nav-container",
            currentPageContainer: "current-page-container",
            linkContainer: "link-container",
        };
    }

    onScroll() {
        window.addEventListener("scroll", () => {
            const scrollTopChrome = document.documentElement.scrollTop;
            const scrollTopSafari = document.body.scrollTop;

            if ((scrollTopSafari > 100 && scrollTopChrome === 0) || (scrollTopChrome > 100 && scrollTopSafari === 0)) {
                this.setState({
                    navContainer: "nav-container nav-container-scroll",
                    currentPageContainer: "current-page-container current-page-container-scroll",
                    linkContainer: "link-container"
                });

            }

            if ((scrollTopSafari < 100 && scrollTopChrome === 0) || (scrollTopChrome < 100 && scrollTopSafari === 0)) {
                this.setState({
                    navContainer: "nav-container",
                    currentPageContainer: "current-page-container",
                    linkContainer: "link-container"
                });
            }
        });
    }
    componentDidMount() {
        this.onScroll();
    }

    render() {
        let pageHeader;
        if (window.location.pathname === "/resume"){
            pageHeader = "RESUME"
        }else if(window.location.pathname === "/contact"){
            pageHeader = "CONTACT ME"
        }else{
            pageHeader = "RECENT PROJECTS"
        }
        return (
            <NavbarComponent
                state={this.state}
                pageHeader = {pageHeader}/>
        )
    }
}
