import React from 'react';
import '../styles/MainMenu.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import {Modal, Button, ButtonGroup} from 'react-bootstrap';
import {Link} from 'react-router';

class MainMenu extends React.Component {

	constructor(props) {
        super(props);
    }

    render() {
        return (
			<ButtonGroup vertical block>
                    <Button
                        bsStyle="primary"
                        bsSize="large"
                        onClick={this.goToBazalScreen.bind(this)}
                    >Bazál</Button>
            </ButtonGroup>
        );
    }

	goToBazalScreen() {
		this.props.route.history.push("/bazal");
	}

}

export default MainMenu;