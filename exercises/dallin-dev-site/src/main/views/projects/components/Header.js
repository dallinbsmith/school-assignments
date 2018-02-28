import React from "react";
import glamorous from "glamorous";

export default function Header(props) {
    /// STYLING \\\
    const mediaQueries = {
        small: "@media screen and (max-width: 991px)",
        xsmall: "@media screen and (max-width: 700px)"
    }

    const Container = glamorous.div({
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        margin: "auto",
        zIndex: "1",
        position: "relative",
        marginTop: "100px",
        [mediaQueries.small]: {
            marginTop: "50px",
            backgroundColor: "white",
            padding: "45px 25px 25px 25px",
        }
    });

    const TextContainer = glamorous.div({
        marginLeft: "125px",
        [mediaQueries.xsmall]: {
            margin: "auto",
            padding: "25px",
        }
    });

    const LinksContainer = glamorous.div({
        display: "flex",
        justifyContent: "space-between",
        width: "150px",
        margin: "25px 0px 25px 125px",
        [mediaQueries.xsmall]: {
            margin: "0px auto 25px auto",
        }
    });

    const MobileStyling = glamorous.div({
        [mediaQueries.xsmall]: {
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
        }
    })

    const NavLink = glamorous.a({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "65px",
        textDecoration: "none",
        color: "black",
        paddingBottom: "2px",
        borderBottom: "4px solid #d1d3d4",
        transition: "all 0.1s ease-in",
        ":hover": {
            color: "#d1d3d4"
        },
    });

    const Languages = glamorous.p({
        color: "#d1d3d4",
        fontWeight: "600",
        zIndex: "1",
        position: "relative",
        fontSize: "1.25em",
        width: "100px",
        marginLeft: "100px",
        [mediaQueries.xsmall]: {
            margin: "auto",
        }
    });
    ////////////////////////////////////
    return (
        <Container>
            <MobileStyling>
                {props.languages ? (
                    <Languages>{props.languages}</Languages>
                    ) : (
                    null
                )}
                <LinksContainer>
                    {props.goThere ? (
                    <NavLink href={props.goThere} target="tab">
                        <i className="fa fa-2x fa-bullseye"></i>
                        {props.goText}
                    </NavLink>
                    ) : (
                        null
                    )}
                    {props.seeCode ? (
                    <NavLink href={props.seeCode} target="tab">
                        <i className="fa fa-2x fa-github"></i>
                        {props.seeText}
                    </NavLink>
                    ) : (
                        null
                    )}
                </LinksContainer>
            </MobileStyling>
            <TextContainer>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </TextContainer>
        </Container>
    )
}
