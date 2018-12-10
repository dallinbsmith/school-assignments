const random = require("random-integer");

// ACTIONS \\
export const addItem = (item) => {
    return {
        type: "ADD_ITEM",
        item
    }
}

export const removeItem = (item) => {
    return {
        type: "REMOVE_ITEM",
        item
    }
}

export const computeTotal = () => {
    return {
        type: "COMPUTE_TOTAL"
    }
}

/////////////////////////////

// REDUCER \\
const state = {
    inCart: JSON.parse(window.localStorage.getItem("cart")) || [],
    tax: 0.00,
    total: 0.00,
    shipping: 0.00
};

export default function reducer(prevState = state, action) {
    let newCart = [...prevState.inCart];
    let newTotal;

    switch(action.type) {
        case "ADD_ITEM":
            // assign each item an id for easy removal
            action.item.id = random(9000, 900000);
            // compute price based on quantity
            action.item.price = +(action.item.price * action.item.quantity).toFixed(2);
            newCart.push(action.item);
            // update local storage
            localStorage.setItem("cart", JSON.stringify(newCart));

            // compute new total for items in newCart
            newTotal = newCart.reduce((totalPrice, item) => {
                console.log(totalPrice)
                totalPrice += item.price;
                return +(totalPrice).toFixed(2);
            }, 0);

            return {
                ...prevState,
                inCart: newCart,
                total: newTotal
            };

        case "REMOVE_ITEM":
            newCart = newCart.filter(item => item.id !== action.item.id);

            if (newCart.length) {
                localStorage.setItem("cart", JSON.stringify(newCart));
            } else {
                localStorage.removeItem("cart");
            }

            // compute new total for items in newCart
            newTotal = newCart.reduce((totalPrice, item) => {
                totalPrice += item.price;
                return +(totalPrice).toFixed(2);
            }, 0);

            return {
                ...prevState,
                inCart: newCart,
                total: newTotal
            };

        case "COMPUTE_TOTAL":
            newTotal = prevState.inCart.reduce((totalPrice, item) => {
                totalPrice += item.price;
                return +(totalPrice).toFixed(2);
            }, 0);
            
            return {
                ...prevState,
                total: newTotal
            };

        default:
            return prevState;
    }
}

/////////////////////////////
