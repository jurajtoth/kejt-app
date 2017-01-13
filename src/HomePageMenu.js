import React from 'react';
import logo from '../images/logo.svg';
import '../styles/HomePageMenu.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router';

class HomePageMenu extends React.Component {

    render() {
        return (
			<div className="home-page-menu">
				<ul className="list-group" >
					<Link to="lieky" style={{ textDecoration: 'none' }}>
						<li className="list-group-item">
							<i className="fa fa-ambulance" style={{color: 'red', paddingRight: '10px'}} aria-hidden="true"></i>
							<span>Vypocet liekov</span>
						</li>
					</Link>
				</ul>
			</div>
        );
    }

}

export default HomePageMenu;