import React from "react";
import glamorous from "glamorous";

import Header from "./components/Header";
import Triangle from "./components/Triangle.js";

export default function Project(props) {

    ////// PHOTOS \\\\\\\
    const backgroundImg = require("../../assets/dbs-diary/background_dbs.jpg");
    const journal = require("../../assets/dbs-diary/journal.png");
    const calendar = require("../../assets/dbs-diary/calendar.png");
    const calculator = require("../../assets/dbs-diary/calculator.png");
    const shitlist = require("../../assets/dbs-diary/shitlist.png");
    ///////////////////////////////////////////////////////

    ////// STYLING \\\\\\\
    const mediaQueries = {
        small: "@media screen and (max-width: 991px)",
        xsmall: "@media screen and (max-width: 700px)",
    };

    const ProjectContainer = glamorous.div({
        background: `url(${backgroundImg}) no-repeat`,
        paddingTop: "500px",
        width: "100wh",
        height: "auto",
        backgroundSize: "cover",
        paddingBottom: "55px",
        borderBottom: "10px solid #FF4057",
    });

    const TopPics = glamorous.div({
        height: "600px",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: "-150px",
        [mediaQueries.small]: {
            marginTop: "50px",
            height: "auto",
        }
    });

    const BottomPics = glamorous.div({
        height: "400px",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: "50px",
        [mediaQueries.small]: {
            marginTop: "auto",
            height: "auto",
        }
    });

    const JournalPic = glamorous.div({
        width: "547px",
        height: "417px",
        background: `url(${journal}) no-repeat center`,
        backgroundSize: "cover",
        position: "relative",
        zIndex: "1",
        alignSelf: "flex-end",
        [mediaQueries.xsmall]: {
            width: "320px",
            height: "244px",
        }
    });

    const CalendarPic = glamorous.div({
        width: "266px",
        height: "372px",
        background: `url(${calendar}) no-repeat center`,
        backgroundSize: "cover",
        position: "relative",
        zIndex: "1",
        [mediaQueries.xsmall]: {
            width: "320px",
            height: "448px",
        }
    });

    const CalculatorPic = glamorous.div({
        width: "365px",
        height: "354px",
        background: `url(${calculator}) no-repeat center`,
        backgroundSize: "cover",
        zIndex: "1",
        position: "relative",
        [mediaQueries.xsmall]: {
            width: "320px",
            height: "310px",
        }
    });

    const ShitlistPic = glamorous.div({
        width: "636px",
        height: "414px",
        background: `url(${shitlist}) no-repeat center`,
        backgroundSize: "cover",
        zIndex: "1",
        position: "relative",
        [mediaQueries.xsmall]: {
            width: "320px",
            height: "208px",
        }
    });

    const WithLanguagesContainer = glamorous.div({
        display: "flex",
        flexDirection: "column",
        alignSelf: "flex-end",
    });

    const Languages = glamorous.p({
        color: "#FF4057",
        fontWeight: "600",
        zIndex: "1",
        position: "relative",
        fontSize: "1.5em",
        width: "300px",
        marginLeft: "-50px",
        backgroundColor: "white",
        padding: "10px",
        [mediaQueries.small]: {
            marginLeft: "0",
        }
    });
    //////////////////////////////////////////

    return (
        <ProjectContainer id="project-container">
            <Triangle borderWidth="0 2500px 900px 2500px"/>
            <Header
                title={props.title}
                description={props.description}
                goThere={props.goThere}
                goText={props.goText}
                seeCode={props.seeCode}
                seeText={props.seeText}/>
            <TopPics>
                <JournalPic/>
                <WithLanguagesContainer>
                    <CalendarPic/>
                    <Languages>REACT + REDUX + EXPRESS + MONGODB + MONGOOSE</Languages>
                </WithLanguagesContainer>
            </TopPics>
            <BottomPics>
                <CalculatorPic/>
                <ShitlistPic/>
            </BottomPics>
        </ProjectContainer>
    )
}
