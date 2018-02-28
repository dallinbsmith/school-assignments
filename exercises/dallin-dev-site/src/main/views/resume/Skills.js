import React from "react";

function Skills() {
    return (
        <div className = "skills-col">
            <div className = "education">
                <div className = "title-row">
                    <div className = "plus-icon"></div>
                    <h1 className = "resume-header">EDUCATION</h1>
                </div>
                <hr className = "resume-header"/>
                <div className = "res-sect">
                    <h4 className = "resume-sect-title">INDUSTRIAL DESIGN</h4>
                    <h4 className = "resumels red-heading byu">BRIGHAM YOUNG UNIVERSITY</h4>
                    <div className = "skills-row degree">
                        <h5 className = "resumels">BACHELORS DEGREE OF FINE ARTS</h5>
                        <h5 className = "resumers class-of">CLASS OF 2014</h5>
                    </div>
                    <p className = "resumels resumers resume-paragraph">FOCUS IN PRODUCT DESIGN, DEVELOPMENT, MANUFACTURE, INITIAL
                    CONCEPT, DEMOGRAPHIC RESEARCH, ADOBE SUITE, ILLUSTRATOR,
                    PHOTOSHOP, SOLID WORKS, PROTOTYPING AND PRESENTATION
                    </p>
                </div>
                <div className = "res-sect">
                    <h4 className = "resume-sect-title">FULL STACK DEVELOPMENT</h4>
                    <div className = "skills-row">
                        <h5 className = "red-heading resumels">V SCHOOL</h5>
                        <h5 className = "resumers class-of">2017</h5>
                    </div>
                    <p className = "resumels resumers resume-paragraph">FOCUS IN PRODUCT DESIGN, DEVELOPMENT, MANUFACTURE, INITIAL
                    CONCEPT, DEMOGRAPHIC RESEARCH, ADOBE SUITE, ILLUSTRATOR,
                    PHOTOSHOP, SOLID WORKS, PROTOTYPING AND PRESENTATION
                    </p>
                </div>
            </div>
            <div>
                <div className = "title-row">
                    <div className = "plus-icon"></div>
                    <h1 className = "resume-header">SKILLS</h1>
                </div>
                <hr/>
                <div className = "skills-row">
                    <h4>JAVASCRIPT HTML CSS</h4>
                    <div className = "rcircles six-circles"></div>
                </div>
                <div className = "skills-row">
                    <h4>REACT</h4>
                    <div className = "rcircles five-circles"></div>
                </div>
                <div className = "skills-row">
                    <h4>NODE MONGO MONGOOSE</h4>
                    <div className = "rcircles four-circles"></div>
                </div>
                <div className = "skills-row">
                    <h4>ADOBE SUITE (Ps, Ai, Ae, Pr)</h4>
                    <div className = "rcircles seven-circles"></div>
                </div>
                <div className = "skills-row">
                    <h4>MEDIA PRODUCTION</h4>
                    <div className = "rcircles five-circles"></div>
                </div>
                <div className = "skills-row">
                    <h4>EVENTS</h4>
                    <div className = "rcircles six-circles"></div>
                </div>
                <div className = "skills-row">
                    <h4>PRODUCT DESIGN</h4>
                    <div className = "rcircles four-circles"></div>
                </div>
            </div>
        </div>
    )
}

export default Skills
