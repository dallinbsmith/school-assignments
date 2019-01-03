import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
                <ul>
                    <li><Link to= "/">Home</Link></li>
                    <li><Link to= "/profile">Profile</Link></li>
                    <li><Link to= "/public">Public</Link></li>
                    {this.props.auth.isAuthenticated() && (<li><Link to= "/private">Private</Link></li>)}
                    {this.props.auth.isAuthenticated() &&  this.props.auth.userHasScopes(["read:courses"]) && (<li><Link to= "/courses">Courses</Link></li>)}
                    <li><button onClick = {this.props.auth.isAuthenticated()? this.props.auth.logout : this.props.auth.login}>{this.props.auth.isAuthenticated()? "logout" : "login"}</button>
                    </li>
                </ul>  
        );
    }
}

export default Nav;