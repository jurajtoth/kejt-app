import React from 'react';
import logo from '../images/logo.svg';
import HomePageMenu from './HomePageMenu.js';
import '../styles/HomePageMenu.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rendered: true
        }
    }

    render() {
        return (
            <div className="homepage-choices">
				<HomePageMenu />
            </div>
        );
    }

}

export default HomePage;