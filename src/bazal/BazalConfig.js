import React from 'react';
import {Modal, Button, FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';

class BazalConfig extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            showModal : false,
            _bazalDefaults: {
                until10 : 100,
                until20 : 50,
                above20 : 20
            },
            bazalConfig: {
                until10 : 100,
                until20 : 50,
                above20 : 20
            },
            _until10 : 100,
            _until20 : 50,
            _above20 : 20
        };
        this.props.configChangeListener(this.state.bazalConfig);
    }


    render() {
        return (
             <Button
                bsSize="large"
                onClick={this.openModal.bind(this)}
             >Zmeniť hodnoty
                <div className="static-modal">
                    <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)}>
                        <Modal.Header>
                            <Modal.Title>Nastavenie</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <FormGroup controlId="until10Input">
                                    <ControlLabel>Objem (ml) na 1kg (do 10kg)</ControlLabel>
                                    <FormControl id="until10Input" type="text" pattern="\d*" autoComplete="off"
                                        value={this.state._until10} onChange={this._saveInputValue.bind(this, '_until10')}/>
                                </FormGroup>
                                <FormGroup controlId="until20Input">
                                    <ControlLabel>Objem (ml) na 1kg (od 11kg do 20kg)</ControlLabel>
                                    <FormControl id="until20Input" type="text" pattern="\d*" autoComplete="off"
                                        value={this.state._until20} onChange={this._saveInputValue.bind(this, '_until20')} />
                                </FormGroup>
                                <FormGroup controlId="above20Input">
                                    <ControlLabel>Objem (ml) na 1kg (nad 20kg)</ControlLabel>
                                    <FormControl id="above20Input" type="text" pattern="\d*" autoComplete="off"
                                        value={this.state._above20} onChange={this._saveInputValue.bind(this, '_above20')} />
                                </FormGroup>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.setDefaultValues.bind(this)}>Default hodnoty</Button>
                            <Button onClick={this.closeModal.bind(this)}>Zavrieť</Button>
                            <Button onClick={this.saveValues.bind(this)} bsStyle="primary">Uložiť</Button>
                        </Modal.Footer>
                </Modal>
            </div>
        </Button>
        );
    }

    _saveInputValue(variableName, e) {
        const value = parseInt(e.target.value);
        this.setState({[variableName] : value});
    }

    saveValues() {
        const until10 = this.state._until10;
        const until20 = this.state._until20;
        const above20 = this.state._above20;
        this.setState({
            bazalConfig : {
                until10 : until10,
                until20 : until20,
                above20 : above20
            },
            showModal: false 
        }, () => {
            this.props.configChangeListener(this.state.bazalConfig)
        });
    }

    setDefaultValues() {
        const defaults = this.state._bazalDefaults;
        this.setState({
            _until10 : defaults.until10,
            _until20 : defaults.until20,
            _above20 : defaults.above20
        });
    }

    closeModal() {
        const config = this.state.bazalConfig;
        this.setState({ 
            _until10 : config.until10,
            _until20 : config.until20,
            _above20 : config.above20,
            showModal: false 
        });
    }

    openModal() {
        this.setState({
            showModal : true
        });
    }

    handleChange() {
        console.log('change');
    }

}

export default BazalConfig;