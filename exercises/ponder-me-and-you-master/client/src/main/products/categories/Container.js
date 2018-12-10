import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getUrlParams, resetUrlParams, resetSelectedMeme } from "../../redux/products";
import Prints from "./PrintsPage";
import Totes from "./TotesPage";

class Categories extends React.Component {
    componentDidMount() {
        this.props.getUrlParams(this.props.match.params);
    }

    componentWillUnmount() {
        this.props.resetUrlParams();
        this.props.resetSelectedMeme();
    }

    render() {
        return (
            <Switch>
                <Route path="/prints" component={Prints} />
                <Route path="/totes" component={Totes} />
            </Switch>
        )
    }
}

export default connect(null, { getUrlParams, resetUrlParams, resetSelectedMeme })(Categories);
