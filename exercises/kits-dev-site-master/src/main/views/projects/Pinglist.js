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

    const TopPicsContainer = glamorous.div({
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: "55px",
        width: "80%",
        margin: "auto",
        [mediaQueries.mobilePics]: {
            width: "100%",
            justifyContent: "space-between",
        },
        [mediaQueries.small]: {
            width: "100%",
            justifyContent: "center",
            marginTop: "55px",
        },
    });

    const BottomPicsContainer = glamorous.div({
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "-420px auto 0px auto",
        // width: "50%",
        [mediaQueries.small]: {
            margin: "35px auto auto auto",
        }
    });
    ////////////////////////////////////////////

    return (
        <ProjectContainer>
            <Triangle borderWidth="0 2500px 800px 2500px"/>
            <Header
                title={props.title}
                description={props.description}
                goThere={props.goThere}
                goText={props.goText}
                seeCode={props.seeCode}
                seeText={props.seeText}
                languages="APP DESIGN"/>
            <TopPicsContainer>
                <MobilePic imgUrl={props.profile}/>
                <MobilePic imgUrl={props.login}/>
            </TopPicsContainer>
            <BottomPicsContainer>
                <MobilePic imgUrl={props.alarms}/>
                <MobilePic imgUrl={props.performance}/>
            </BottomPicsContainer>
        </ProjectContainer>
    )
}
