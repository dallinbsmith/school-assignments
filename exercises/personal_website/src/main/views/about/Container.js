import React from "react";
import AComponent from "./Component"
import about from "./about.json";

class About extends React.Component {
    // constructor() {
    //     super();
    // }

    getPerson() {
        return about.map((profile, i) => {
            return <AComponent profile={profile} key={profile.name + i}/>
        });
    }

    render() {
        return (
            <div>
                <div>
                    {this.getPerson()}
                </div>
            </div>
        )
    }
}

export default About;
