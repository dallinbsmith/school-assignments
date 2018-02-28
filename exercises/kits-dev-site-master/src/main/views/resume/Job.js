import React from "react";
import glamorous from "glamorous";

export default function Job(props) {
    const mediaQueries = {
        small: "@media screen and (max-width: 991px)",
        xsmall: "@media screen and (max-width: 675px)"
    };

    const Container = glamorous.div({
        display: "flex",
        justifyContent: "space-around",
        color: "white",
        padding: "70px 50px 25px 120px",
        [mediaQueries.xsmall]: {
            flexDirection: "column",
            padding: "80px 40px 40px 40px",
        }
    });

    const LeftContainer = glamorous.div({
        display: "flex",
        flexDirection: "column",
        paddingLeft: "40px",
        borderLeft: "4px solid #FF4057",
        height: "50px",
        width: "25%",
        [mediaQueries.xsmall]: {
            height: "auto",
            width: "100%",
        }
    });

    const RightContainer = glamorous.div({
        display: "flex",
        flexDirection: "column",
        width: "60%",
        [mediaQueries.xsmall]: {
            marginTop: "55px",
            width: "100%",
        }
    });

    const Title = glamorous.p({
        fontWeight: "600",
        margin: "0",
        fontSize: "1.2em",
    });

    const TimePeriod = glamorous.p({
        fontSize: "0.85em",
        margin: "10px 0 0 0",
    });

    const Workplace = glamorous.p({
        margin: "0",
    });

    const Bullet = glamorous.p({
        fontSize: "1.2em",
        lineHeight: "1.5",
        marginTop: "10px",
    });

    const Pop = glamorous.span({
        fontWeight: "600",
    });


    return (
        <Container>
            <LeftContainer>
                <Title>{props.title}</Title>
                <TimePeriod>{props.time}</TimePeriod>
            </LeftContainer>
            <RightContainer>
                <Workplace>{props.workplace}</Workplace>
                <Bullet><Pop>{props.pop1}</Pop>{props.bullet1}</Bullet>
            {props.pop2 ? <Bullet><Pop>{props.pop2}</Pop>{props.bullet2}</Bullet> : ""}
            {props.pop3 ? <Bullet><Pop>{props.pop3}</Pop>{props.bullet3}</Bullet> : ""}
            {props.pop4 ? <Bullet><Pop>{props.pop4}</Pop>{props.bullet4}</Bullet> : ""}
            {props.pop5 ? <Bullet><Pop>{props.pop5}</Pop>{props.bullet5}</Bullet> : ""}
            </RightContainer>
        </Container>
    )
}
