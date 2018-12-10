import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem, computeTotal } from "../redux/cart";
import glamorous from "glamorous";
import { colors, mediaQueries } from "../../styles/global";

import Item from "./Item";
import NothingInCart from "./NothingInCart";
import CartTotal from "./CartTotal";

class CartContainer extends React.Component {
    constructor() {
        super();
        this.removeItem = this.removeItem.bind(this);
    }

    componentDidMount() {
        this.props.computeTotal();
    }

    mapCart() {
        return this.props.cart.inCart.map((item, i) => {
            return <Item key={i}
                        item={item}
                        remove={this.removeItem}/>
        });
    }

    removeItem(item) {
        this.props.removeItem(item);
    }

    render() {
        const YourCart = glamorous.h2({
            position: "fixed",
            top: "100",
            [mediaQueries.medium]: {
                position: "relative",
                top: "auto",
                marginBottom: "35px",
                paddingBottom: "15px",
                borderBottom: `1px dotted ${colors.grey}`,
            }
        });

        const CartDetailsContainer = glamorous.div({
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "65vw",
            [mediaQueries.medium]: {
                flexDirection: "column",
            }
        });

        return (
            <div>
                <YourCart>Your Cart</YourCart>
                <CartDetailsContainer>
                    <div>
                        {this.mapCart()}
                    </div>
                    {this.props.cart.total > 0 ?
                        <CartTotal
                            total={this.props.cart.total}/>
                    :
                        <NothingInCart/> }
                </CartDetailsContainer>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { addItem, removeItem, computeTotal })(CartContainer);
