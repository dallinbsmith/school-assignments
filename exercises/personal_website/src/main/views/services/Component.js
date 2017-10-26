import React from "react";
import {Switch, Route} from "react-router-dom";
import Service from "./views/Service";

function ServicesComponent(props) {
    let searchId = props.searchId;
    return (
        <div className="services-component-container">
            <div className="services-window-container">
                <div className="services-container">
                    {props.genServices()}
                </div>
                <div className="switch-container">
                    <Switch>
                        <Route path="/services/:id" render={props => {
                                return (
                                    <Service searchId={searchId}{...props}/>
                                )
                            }}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default ServicesComponent;
