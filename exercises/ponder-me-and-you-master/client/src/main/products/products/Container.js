import React from "react";
import ProductPage from "./ProductPage";
import Thumbnail from "./Thumbnail";
import Option from "./Option";
import { backgrounds } from "../../../assets/pictures";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMemes, selectMeme, getUrlParams, resetUrlParams, resetSelectedMeme } from "../../redux/products";
import { addItem } from "../../redux/cart";
import { mediaQueries } from "../../../styles/global";

class MemeContainer extends React.Component {
    constructor(props) {
        super(props);
        const sizes = props.products.sizes;
        const product = props.match.params.product;
        this.state = {
            selectedSize: [...sizes[product].keys()][0],
            price: [...sizes[product].values()][0]
        };

        this.mapSizes = this.mapSizes.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.chooseBackground = this.chooseBackground.bind(this);
        this.setMemePosition = this.setMemePosition.bind(this);
        this.mapMemes = this.mapMemes.bind(this);
    }

    componentDidMount() {
        this.props.getMemes();
        this.props.selectMeme(this.props.match.params.id);
        this.props.getUrlParams(this.props.match.params);
    }

    componentWillUnmount() {
        this.props.resetUrlParams();
        this.props.resetSelectedMeme();
    }

    /////// THUMBNAIL METHODS ///////
    mapMemes() {
        return this.props.products.memes.map(meme => {
            return <Link to={`../${meme._id}/${this.props.match.params.product}`} key={meme._id}><Thumbnail meme={meme} /></Link>;
        });
    }
    //////////////////////////////////////////////

    /////// PRODUCT PAGE METHODS ///////
    mapSizes() {
        const product = this.props.match.params.product;
        const availableSizes = [...this.props.products.sizes[product].keys()];
        return availableSizes.map(size => {
                return <Option key={size} size={size} />;
        });
    }

    handleSelect() {
        this.setState(prevState => {
            const selectedSize = document.getElementById("sizes").selectedOptions[0].value;
            const sizes = this.props.products.sizes;
            const product = this.props.match.params.product;
            return {
                ...prevState,
                selectedSize: selectedSize,
                price: sizes[product].get(selectedSize)
            }
        });
    }

    handleQuantityChange(event) {
        if (event.target.value >= 1) {
            document.getElementById("quantity-error").style.visibility = "hidden";
        } else {
            document.getElementById("quantity-error").style.visibility = "inherit";
        }
    }

    addToCart() {
        if (Number(document.getElementById("quantity").value) >= 1) {
            const meme = this.props.products.selectedMeme.meme;
            const whichProduct = () => {
                switch(this.props.match.params.product) {
                    case "framed":
                        return "Matte Poster (Framed)";

                    case "unframed":
                        return "Matte Poster (Unframed)";

                    case "canvas":
                        return "Canvas Print";

                    default:
                        return "Product";
                }
            }

            const item = {
                ...this.state,
                title: meme.title,
                pictureUrl: meme.pictureUrl,
                product: whichProduct(),
                quantity: Number(document.getElementById("quantity").value),
            };
            this.props.addItem(item);
        } else {
            document.getElementById("quantity-error").style.visibility = "inherit";
        }
    }

    chooseBackground() {

        switch(this.props.match.params.product) {
            case "framed":
                return backgrounds.framed;
            case "unframed":
                return backgrounds.unframed;
            case "canvas":
                return backgrounds.canvas;
            default:
                return backgrounds.framed;
        }
    }

    setMemePosition() {
        switch(this.props.match.params.product) {
            case "framed":
                return {
                    position: "absolute",
                    left: "20px",
                    height: "310px",
                    width: "310px",
                    [mediaQueries.medium]: {
                        height: "245px",
                        width: "245px",
                    },
                    [mediaQueries.small]: {
                        height: "200px",
                        width: "200px",
                    }
                };

            case "unframed":
                return {
                    position: "absolute",
                    top: "-25px",
                    left: "50px",
                    height: "270px",
                    width: "270px",
                    [mediaQueries.medium]: {
                        height: "240px",
                        width: "240px",
                        left: "25px",
                    },
                    [mediaQueries.small]: {
                        height: "190px",
                        width: "190px",
                        top: "-20px",
                        left: "25px",
                    }
                };

            case "canvas":
                return {
                    position: "absolute",
                    left: "65px",
                    height: "405px",
                    [mediaQueries.medium]: {
                        height: "327px",
                        left: "50px",
                    },
                    [mediaQueries.small]: {
                        height: "264px",
                        left: "40px",
                    }
                };
            default:
                return {
                    position: "absolute",
                    left: "20px",
                    height: "310px",
                    width: "310px",
                    [mediaQueries.medium]: {
                        height: "245px",
                        width: "245px",
                    },
                    [mediaQueries.small]: {
                        height: "200px",
                        width: "200px",
                    }
                };
        }
    }

    render() {
        return (
            <div>
                <ProductPage
                    params={this.props.match.params}
                    backgroundUrl={this.chooseBackground}
                    memeStyles={this.setMemePosition}
                    mapMemes={this.mapMemes}
                    mapSizes={this.mapSizes}
                    handleSelect={this.handleSelect}
                    addToCart={this.addToCart}
                    state={this.state}
                    handleQuantityChange={this.handleQuantityChange}
                />
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getMemes, selectMeme, getUrlParams, resetUrlParams, resetSelectedMeme, addItem })(MemeContainer);
