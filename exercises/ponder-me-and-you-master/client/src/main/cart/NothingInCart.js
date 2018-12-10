import React from "react";
import glamorous from "glamorous";
import { mediaQueries } from "../../styles/global";

export default function NothingInCart() {
    const EmptyCartMessage = glamorous.p({
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        color: "grey",
        textAlign: "center",
        [mediaQueries.small]: {
            position: "relative",
        }
    });

    return (<EmptyCartMessage>There is currently nothing in your cart.</EmptyCartMessage>)
}
