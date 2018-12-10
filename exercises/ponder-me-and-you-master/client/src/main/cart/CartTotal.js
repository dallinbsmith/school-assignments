import React from "react";
import glamorous from "glamorous";
import { colors, mediaQueries } from "../../styles/global";

export default function CartTotal(props) {
    const Container = glamorous.div({
        width: "100%",
    });

    const Total = glamorous.h3({
        textAlign: "right",
        borderTop: `2px dotted ${colors.grey}`,
        borderLeft: `2px dotted ${colors.grey}`,
        paddingTop: "22px",
    });

    const CheckoutButton = glamorous.button({
        width: "100%",
        height: "65px",
        backgroundColor: colors.green,
        border: "none",
        fontSize: "1.5em",
        marginTop: "35px",
    });

    return (
        <Container>
            <Total>TOTAL: ${props.total}</Total>
            <CheckoutButton type="button">CHECKOUT</CheckoutButton>
        </Container>
    )
}
