import React from "react";
import glamorous from "glamorous";
import { Switch, Route, withRouter } from "react-router-dom";
import { mediaQueries } from "../styles/global";

// Components \\
import Navbar from "./Navbar";
import Admin from "./admin/Container";
import Products from "./products/products/Container";
import Categories from "./products/categories/Container";
import Cart from "./cart/Container";
import Landing from "./landing/Container";
import Sidebar from "./Sidebar";

class App extends React.Component {
    render() {
        ///////// STYLES \\\\\\\\\\
        const PageContainer = glamorous.div({
            height: "100vh",
            minHeight: "600px",
        });

        const MainContainer = glamorous.div({
            display: "flex",
            flexWrap: "wrap",
        });

        const ContentContainer = glamorous.div({
            marginLeft: "33%",
            marginTop: "200px",
            [mediaQueries.medium]: {
                margin: "300px auto auto auto",
            },
            [mediaQueries.large]: {
                marginLeft: "23%",
            }
        });
        ////////////////////////////////
        return (
            <PageContainer>
                <Navbar />
                <MainContainer>
                    <Sidebar highlightCurrentPage={this.onCurrentPage}/>
                        <ContentContainer>
                            <Switch>
                                <Route exact path="/" component={Landing}/>
                                <Route path="/add-meme" component={Admin}/>
                                <Route path="/cart" component={Cart}/>
                                <Route exact path="/:category" component={Categories}/>
                                <Route path="/:category/:id/:product" component={Products}/>
                            </Switch>
                        </ContentContainer>
                </MainContainer>
            </PageContainer>
        )
    }
}

export default withRouter(App);
