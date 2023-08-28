import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from '../images/svg/main-logo-navbar.svg';

export default class navbarLogo extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          content: ""
        };
      }

    render() {
        return (
            <div className="btn btn-xs btn-icon">
                <a href="/home"><img src={Logo} alt="Logo" /></a>
                
            </div>
        );
    }
};
