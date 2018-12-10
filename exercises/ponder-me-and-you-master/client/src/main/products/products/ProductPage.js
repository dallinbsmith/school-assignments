import React from "react";
import glamorous from "glamorous";
import { connect } from "react-redux";
import { mediaQueries, colors } from "../../../styles/global";
import { products } from "../../../assets/pictures";

function ProductPage(props) {
    ///////// STYLES \\\\\\\\\\
    const Container = glamorous.div({
        display: "flex",
        flexDirection: "column",
        paddingBottom: "35px",
        [mediaQueries.large]: {
            flexDirection: "row",
            justifyContent: "space-around",
            width: "70vw",
            maxWidth: "980px",
        },
    });

    const ProductContainer = glamorous.div({
        paddingBottom: "55px",
        width: "465px",
        [mediaQueries.medium]: {
            width: "375px",
        },
        [mediaQueries.small]: {
            width: "300px",
        },
    });
    const Title = glamorous.h2({
        textAlign: "right",
    });

    const Background = glamorous.div({
        position: "relative",
        background: `url(${props.backgroundUrl()}) no-repeat center`,
        backgroundSize: "cover",
        height: "398px",
        width: "100%",
        [mediaQueries.medium]: {
            height: "320.97px",
        },
        [mediaQueries.small]: {
            height: "256.77px",
        }
    });

    const DetailsContainer = glamorous.div({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        [mediaQueries.medium]: {
            marginBottom: "130px",
        },
    });

    const BuyButton = glamorous.button({
        height: "65px",
        width: "30%",
        outline: "none",
        border: "none",
        backgroundColor: colors.green,
        fontSize: "1em",
    });

    const Price = glamorous.h1({
        color: colors.grey,
    });

    const SelectContainer = glamorous.div({
        position: "relative",
        height: "65px",
        width: "30%",
        border: `1px solid ${colors.grey}`,
    });

    const SelectSize = glamorous.select({
        position: "relative",
        height: "62px",
        width: "100%",
        fontSize: "1.2em",
        WebkitAppearance: "none",
        backgroundColor: "transparent",
        paddingLeft: "15px",
        color: colors.grey,
        border: "none",
        outline: "none",
        textAlign: "center",
        zIndex: "1",
    });

    const chevron = {
        color: colors.grey,
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
    }

    const Quantity = glamorous.input({
        height: "65px",
        backgroundColor: "transparent",
        outline: "none",
        fontSize: "1.2em",
        border: "none",
        width: "2.4em",
        border: `0.5px solid ${colors.grey}`,
        textAlign: "center",
    });

    const MoreContainer = glamorous.div({
        marginTop: "15px",
    });

    const ChooseMemeTitle = glamorous.p({
        paddingBottom: "15px",
        borderBottom: `1px dashed ${colors.grey}`,
        marginBottom: "35px",
    });

    const MemesContainer = glamorous.div({
        width: "550px",
        height: "300px",
        whiteSpace : "nowrap",
        overflowX: "scroll",
        [mediaQueries.medium]: {
            whiteSpace : "normal",
            width: "300px",
            height: "auto",
        },
        [mediaQueries.large]: {
            whiteSpace : "normal",
            width: "250px",
            height: "467px",
        },
    });

    const ErrorMessage = glamorous.h4({
        marginTop: "10px",
        marginBottom: "0",
        color: "red",
        visibility: "hidden",
    });

    const Meme = glamorous.img(props.memeStyles());
    ////////////////////////////////
    return (
        <Container>
        <ProductContainer>
            <Title>{props.products.selectedMeme.ready ? props.products.selectedMeme.meme.title.toUpperCase() : "LOADING..."}</Title>
            <Background><Meme src={props.products.selectedMeme.ready ?  products[props.params.product][props.products.selectedMeme.meme.pictureUrl] : null}/></Background>
            <ErrorMessage id="quantity-error">Please enter a quantity of 1 or more</ErrorMessage>
            <DetailsContainer>
                <BuyButton onClick={props.addToCart} type="button">ADD TO CART</BuyButton>
                <Price id="price">${props.state.price}</Price>
                <SelectContainer>
                    <SelectSize onChange={props.handleSelect} id="sizes" value={props.state.selectedSize}>
                        {props.mapSizes()}
                    </SelectSize>
                    <i className="fa fa-lg fa-chevron-down" style={chevron}/>
                </SelectContainer>
                <Quantity id="quantity" onChange={props.handleQuantityChange} type="number" defaultValue="1" min="1"/>
            </DetailsContainer>
        </ProductContainer>
        <MoreContainer>
            <ChooseMemeTitle>More</ChooseMemeTitle>
            <MemesContainer>
                {props.mapMemes()}
            </MemesContainer>
        </MoreContainer>
        </Container>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {})(ProductPage);
