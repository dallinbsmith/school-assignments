import React from "react";
import glamorous from "glamorous";

import Header from "./Header";
import Skills from "./Skills";
import Job from "./Job";
import Headline from "./Headline";

export default class Resume extends React.Component {
    constructor() {
        super();
        this.handleToggle = this.handleToggle.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleToggle(event) {
        if (event.target.nextSibling.style.display === "none") {
            document.getElementById(event.target.nextSibling.id).style.display = "inherit";
        } else {
            document.getElementById(event.target.nextSibling.id).style.display = "none";
        }
    }

    render() {
        // STYLING \\
        const mediaQueries = {
            small: "@media screen and (max-width: 991px)"
        }

        const MainBody = glamorous.div({
            display: "flex",
            flexWrap: "wrap",
        })

        const JobsContainer = glamorous.div({
            backgroundColor: "#201D1A",
            width: "65%",
            paddingBottom: "25px",
            // height: "500px",
            // overflow: "scroll",
            [mediaQueries.small]: {
                width: "100%",
                height: "auto",
            }
        });

        const SkillsContainer = glamorous.div({
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "35%",
            [mediaQueries.small]: {
                width: "100%",
                marginBottom: "40px",
            }
        });

        const RecentExperience = glamorous.h1({
            transform: "rotate(90deg)",
            color: "#4A4A4A",
        })
        ///////////////////////////////////////////////////////

        return (
            <div>
                <Header/>
                <Headline handleToggle={this.handleToggle}/>
                <MainBody>
                    <SkillsContainer>
                        <Skills/>
                    </SkillsContainer>
                    <JobsContainer>
                        <Job
                            title="CREATIVE DIRECTOR"
                            time="Jan 2014 - Present"
                            workplace="The Noble Paper Creative"
                            pop1="Freelance graphic design"
                            bullet1=" specializing in web and logo design for small businesses and artists."/>
                        <Job
                            title="PROJECT MANAGER"
                            time="July 2013 - July 2016"
                            workplace="PRIME Research"
                            pop1="Produced 100+ reports"
                            bullet1=" from raw data, while overseeing data collection and cleaning."
                            pop2="Onboarded 5 new clients"
                            bullet2=", translating the needs of multinational, conglomerate companies into trackable and substantive data, often without additional team resources."
                            pop3="Reduced team budget hours by 65%"
                            bullet3=" and aided in setting future standards for team budgeting."
                            pop4="Managed global team of 15+ media analysts"
                            pop5="Trained all new team members"
                            bullet5=" and was responsible for the quality of their work product."/>
                        <Job
                            title="EXECUTIVE LEGAL ASSISTANT"
                            time="Apr 2011 - Mar 2013"
                            workplace="The Law Offices of Susan J. Stauffer"
                            pop1="Organized trial discovery"
                            bullet1=" documents and managed attorney’s calendar to meet filing and trial deadlines."
                            pop2="Increased attorney’s profits"
                            bullet2=" by digitizing billing procedures."
                            pop3="Improved workflow efficiency"
                            bullet3=" by updating filing procedures."/>
                    </JobsContainer>
                </MainBody>
            </div>
        )
    }
}
