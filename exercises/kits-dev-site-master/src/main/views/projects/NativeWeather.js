import React from "react";
import glamorous from "glamorous";

import Header from "./components/Header";
import Triangle from "./components/Triangle.js";
import MobilePic from "./components/MobilePic.js";

export default function MobileProject(props) {
    /// STYLING \\\
    const mediaQueries = {
        small: "@media screen and (max-width: 991px)",
        mobilePics: "@media screen and (max-width: 850px)",
        xsmall: "@media screen and (max-width: 700px)",
    };

    const ProjectContainer = glamorous.div({
        background: `url(${props.background}) no-repeat`,
        paddingTop: "200px",
        width: "100wh",
        overflow: "hidden",
        height: "auto",
        backgroundSize: "cover",
        paddingBottom: "55px",
        borderBottom: "10px solid #FF4057",
    });

    const PicsContainer = glamorous.div({
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "55px",
        [mediaQueries.mobilePics]: {

        }
    });
    ////////////////////////////////////////////


    return (
        <ProjectContainer>
            <Triangle borderWidth="0 2500px 875px 2500px"/>
            <Header
                title={props.title}
                description={props.description}
                goThere={props.goThere}
                goText={props.goText}
                seeCode={props.seeCode}
                seeText={props.seeText}
                languages="REACT NATIVE + REDUX + EXPRESS + MONGOOSE"/>
            <PicsContainer>
                <MobilePic imgUrl={props.login}/>
                <MobilePic imgUrl={props.today}/>
                <MobilePic imgUrl={props.extended}/>
            </PicsContainer>
        </ProjectContainer>
    )
}
