import React from "react";
import glamorous from "glamorous";
import { mediaQueries, colors } from "../styles/global"
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Sidebar(props) {
    ///////// STYLES \\\\\\\\\\
    const Container = glamorous.div({
        position: "fixed",
        margin: "200px auto auto 4%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        // flexWrap: "wrap",
        [mediaQueries.medium]: {
            position: "absolute",
            flexDirection: "row",
            left: "50%",
            transform: "translateX(-55%)",
        }
    });

    const categoryPageLinks = {
        textDecoration: "none",
        color: colors.grey,
    }

    const Links = glamorous.div({
        position: "relative",
        width: "125px",
        height: "45px",
        backgroundColor: colors.green,
        margin: "10px 0",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        paddingLeft: "12px",
        color: colors.grey,
        fontSize: "1.2em",
        ":hover": {
            borderBottom: `2px solid ${colors.grey}`,
        },
        [mediaQueries.medium]: {
            marginRight: "10px",
            width: "100px",
            height: "55px",
        }
    });

    const OnCurrentPage = glamorous.div({
        position: "absolute",
        bottom: "-2px",
        left: "15%",
        // height: "45px",
        width: "95%",
        borderBottom: `2px solid ${colors.grey}`,
    });

    const Title = glamorous.h1({
        marginRight: "10px",
    });

    const ProductLinkContainer = glamorous.div({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "35px auto auto 35px",
        height: "175px",
        [mediaQueries.medium]: {
            position: "absolute",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            bottom: "-750%",
            width: "100vw",
            margin: "auto",
            fontSize: "0.85em",
            height: "auto",
        },
        [mediaQueries.small]: {
            bottom: "-650%",
            marginLeft: "-5%",
            height: "auto",
        }
    });

    const categoryLinks = {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        // height: "66px",
        fontSize: "1.2em",
        textDecoration: "none",
        color: colors.grey,

    };
    ////////////////////////////////
    return (
        <Container>
            <Title>SHOP</Title>
        <Link to={`/prints`} style={categoryPageLinks}><Links>PRINTS{props.products.urlParams.category === "prints" ? <OnCurrentPage /> : null}</Links></Link>
        <Link to={`/totes`} style={categoryPageLinks}><Links>TOTES{props.products.urlParams.category === "totes"? <OnCurrentPage /> : null}</Links></Link>
        {props.products.urlParams.category === "prints" ?
            (<ProductLinkContainer>
                <Link to={`/prints/${props.products.urlParams.id}/framed`} style={categoryLinks} id="framed">Matte Poster<br/>FRAMED{props.products.urlParams.product === "framed" ? <OnCurrentPage /> : null}</Link>
                <Link to={`/prints/${props.products.urlParams.id}/unframed`} style={categoryLinks} id="unframed">Matte Poster<br/>UNFRAMED{props.products.urlParams.product === "unframed" ? <OnCurrentPage /> : null}</Link>
                <Link to={`/prints/${props.products.urlParams.id}/canvas`} style={categoryLinks} id="canvas">Canvas Print{props.products.urlParams.product === "canvas" ? <OnCurrentPage /> : null}</Link>
            </ProductLinkContainer>)
            :
            null}
        </Container>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {})(Sidebar);
