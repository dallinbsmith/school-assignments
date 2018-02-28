import React from "react";

import Skills from "./Skills";
import Job from "./Job";
import Headline from "./Headline";

export default class Resume extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {

        return (
            <div>
                <Headline/>
                <div className = "main-body">
                    <div className = "skills-container">
                        <Skills/>
                    </div>
                    <div className = "jobs-container">
                        <Job/>
                    </div>
                </div>
            </div>
        )
    }
}
