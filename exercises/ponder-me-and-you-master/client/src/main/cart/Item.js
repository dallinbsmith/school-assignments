import React from "react";
import glamorous from "glamorous";
import { memes } from "../../assets/pictures";
import { mediaQueries } from "../../styles/global";

export default function Item(props) {
    // STYLES \\
    const Container = glamorous.div({
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        marginBottom: "55px",
        marginRight: "15%",
        [mediaQueries.medium]: {
            width: "400px",
        },
        [mediaQueries.small]: {
            width: "300px",
        },
    });

    const Thumbnail = glamorous.img({
        width: "50%",
        [mediaQueries.medium]: {
            width: "40%",
        },

    });

    const DetailsContainer = glamorous.div({
        display: "flex",
        flexDirection: "column",
        width: "30%",
    });

    const PghText = glamorous.p({
        margin: "0 0 20px 0",
        textAlign: "center",
        fontSize: "1em",
        [mediaQueries.medium]: {
            fontSize: "1em",
        },
        [mediaQueries.small]: {
            fontSize: "0.75em",
            margin: "0 0 15px 0",
        },
    });

    const BoldText = glamorous.h2({
        margin: "0",
        textAlign: "center",
        [mediaQueries.medium]: {
            fontSize: "1.25em",
        },
        [mediaQueries.small]: {
            fontSize: "1em",
        },
    });

    const xStyles = {
        marginTop: "55px",
        marginLeft: "25px",
        color: "red",
        cursor: "pointer",
        textAlign: "center",
        border: "2px solid red",
        borderRadius: "3px",
        padding: "3px",
    };
    //////////////////////////
    return (
        <Container>
            <Thumbnail src={memes[props.item.pictureUrl]} alt={`Meme entitled: ${props.item.title}`} />
            <DetailsContainer>
                <PghText>{props.item.title}</PghText>
                <BoldText>{props.item.product}</BoldText>
                <PghText>{props.item.selectedSize}</PghText>
                <BoldText>${props.item.price}</BoldText>
            </DetailsContainer>
            <i onClick={(e) => props.remove(props.item)} style={xStyles} className="fa fa-2x fa-times" />
        </Container>
    );
}
