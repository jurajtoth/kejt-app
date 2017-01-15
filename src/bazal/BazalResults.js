import React from 'react';
import {Modal, Button, ButtonGroup, FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';

class BazalResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal : false,
            resultData : []
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            showModal: props.showModal,
            resultData: props.resultData
        });
    }

    shouldComponentUpdate(props, b) {
        return props.showModal && props.resultData;
    }

    render() {
        return (
                <div className="static-modal">
                    <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                        <Modal.Header>
                            <Modal.Title>Výsledok bazálnej potreby tekutín</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="results">
                                {this.state.resultData.map(el => {
                                    return <div>{el}</div>;
                                })}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <ButtonGroup bsSize="large">
                                <Button bsStyle="primary">Výpočet roztoku</Button>
                                <Button onClick={this.close.bind(this)}>Zavrieť</Button>
                            </ButtonGroup>
                        </Modal.Footer>
                </Modal>
            </div>
        );
    }

    close() {
        this.setState({showModal : false}, this.props.closeResults);
    }

}

export default BazalResults;