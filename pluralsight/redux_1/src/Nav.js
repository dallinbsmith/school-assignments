import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
                <ul>
                    <li><Link to= "/">Home</Link></li>
                    <li><Link to= "/public">Public</Link></li>
                    <li><Link to= "/courses">Courses</Link></li>
                </ul>  
        );
    }
}

export default Nav;