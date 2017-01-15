import React from 'react';
import '../styles/Header.css';

class Header extends React.Component {

    render() {
        return (
            <div className="homepage-header">
				<i className="fa fa-heartbeat fa-5x" aria-hidden="true"></i>
				<span className="title">{this.props.title}</span>
            </div>
        );
    }

}

export default Header;