import React from "react";
import glamorous from "glamorous";

export default function Headline(props) {
    // STYLING \\
    const mediaQueries = {
        small: "@media screen and (max-width: 991px)"
    }

    const Headline = glamorous.div({
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "25px",
        color: "#FF4057",
        height: "155px",
        [mediaQueries.small]: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "90px 0",
        }
    });

    const MyName = glamorous.h1({
        fontSize: "3em",
        fontWeight: "300",
        letterSpacing: "5",
    });

    const ContactContainer = glamorous.div({
        display: "flex",
        width: "30%",
        justifyContent: "space-around",
        alignItems: "center",
        [mediaQueries.small]: {
            width: "80%",
            marginTop: "35px",
        }
    });

    const ContactSubContainer = glamorous.div({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [mediaQueries.small]: {
            margin: "45px 0px",
        }
    });
    ///////////////////////////////////////////////

    return (
        <Headline>
            <MyName>Kit Masaracchia</MyName>
            <ContactContainer>
                <ContactSubContainer>
                    <i onClick={props.handleToggle} className="fa fa-3x fa-envelope-o"></i>
                <h4 id="email" style={{display: "none"}}>kit.masaracchia@gmail.com</h4>
                </ContactSubContainer>
                <ContactSubContainer>
                    <i onClick={props.handleToggle} className="fa fa-3x fa-mobile"></i>
                <h4 id="phone" style={{display: "none"}}>+1 412-721-1526</h4>
                </ContactSubContainer>
            </ContactContainer>
        </Headline>
    )
}
