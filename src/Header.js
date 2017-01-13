import React from 'react';
import '../styles/Header.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import {Link} from 'react-router';

class Header extends React.Component {

    render() {
        return (
            <div className="homepage-header">
				<i className="fa fa-heartbeat fa-5x" aria-hidden="true"></i>
				<span className="title">Kejt app</span>
            </div>
        );
    }

}

export default Header;