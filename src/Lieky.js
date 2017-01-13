import React from 'react';
import logo from '../images/logo.svg';
import '../styles/HomePageMenu.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router';

class Lieky extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rendered: true
        }
    }

    render() {
        return (
		<div>
			<div>Cauky mnauky</div>
			<span><Link to="/">Back</Link></span>
		</div>
        );
    }

}

export default Lieky;