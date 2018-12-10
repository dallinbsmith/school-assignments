import React from "react";
import glamorous from "glamorous";
import { Link } from "react-router-dom";
import { mediaQueries, colors } from "../../styles/global";
import { memes } from "../../assets/pictures";

export default function MemeComponent(props) {
    const sizing = {
        height: 412,
        width: 412,
        padding: {
            top: 60,
            right: 70,
            bottom: 25,
            left: 70,
        },
        large: {
            height: 475,
            width: 475,
        },
        medium: {
            height: 375,
            width: 375,
        },
        small: {
            height: 300,
            width: 300,
        }
    }
    ///////// STYLES \\\\\\\\\\
    const Card = glamorous.div({
        padding: `${sizing.padding.top}px ${sizing.padding.right}px ${sizing.padding.bottom}px ${sizing.padding.left}px`,
        backgroundColor: "white",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,0.50)",
        marginBottom: `${sizing.padding.top + 10}px`,
        [mediaQueries.medium]: {
            padding: "0",
            backgroundColor: "transparent",
            boxShadow: "none",
        },
        [mediaQueries.large]: {
            marginLeft: "125px",
        }
    });

    const Meme = glamorous.img({
        width: sizing.width,
        height: sizing.height,
        [mediaQueries.medium]: {
            height: sizing.medium.height,
            width: sizing.medium.width,
        },
        [mediaQueries.small]: {
            height: sizing.small.height,
            width: sizing.small.width,
        },
        [mediaQueries.large]: {
            height: sizing.large.height,
            width: sizing.large.width,
        },
    });

    const ClickContainer = glamorous.div({
        display: "flex",
        justifyContent: "space-between",
        width: `${sizing.width}px`,
        padding: "20px 0 0 0",
        [mediaQueries.medium]: {
            width: sizing.medium.width,
        },
        [mediaQueries.small]: {
            width: sizing.small.width,
        },
        [mediaQueries.large]: {
            width: sizing.large.width,
        },
    });

    const BuyButton = glamorous.a({
        height: `${sizing.padding.right}px`,
        width: `${sizing.padding.right + 15}px`,
        padding: "5px 5px 35px 5px",
        textAlign: "center",
        backgroundColor: colors.green,
        fontSize: "2em",
    });

    const ShareContainer = glamorous.div({
        display: "flex",
        flexDirection: "column",
        height: `${sizing.padding.right}px`,
        width: "150px",
        color: colors.grey,
    });

    const ShareTitle = glamorous.h3({
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        height: "40px",
        margin: "0 0 5px 0",
        paddingRight: "10px",
        backgroundColor: colors.green,
    });

    const IconContainer = glamorous.div({
        display: "flex",
        justifyContent: "space-between",
    });

    const IconLinks = glamorous.a({
        textDecoration: "none",
        color: colors.grey,
    });
    ////////////////////////////////
    return (
        <Card>
            <Link to={`/prints/${props.meme._id}/framed`}><Meme src={memes[props.meme.pictureUrl]} alt={`Digital art entitled: ${props.meme.title}`}/></Link>
            <ClickContainer>
                <BuyButton>BUY</BuyButton>
                <ShareContainer>
                    <ShareTitle>SHARE</ShareTitle>
                    <IconContainer>
                        <IconLinks href=""><i className="fa fa-2x fa-twitter"></i></IconLinks>
                        <IconLinks href=""><i className="fa fa-2x fa-pinterest"></i></IconLinks>
                        <IconLinks href=""><i className="fa fa-2x fa-facebook-official"></i></IconLinks>
                    </IconContainer>
                </ShareContainer>
            </ClickContainer>
        </Card>
    )
}
