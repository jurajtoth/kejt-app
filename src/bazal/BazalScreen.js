import React from 'react';
import '../../styles/bazal/BazalScreen.css';
import {Link} from 'react-router';
import {Modal, Button, ButtonGroup} from 'react-bootstrap';

import BazalConfig from './BazalConfig';
import BazalResults from './BazalResults';

// import BazalConfig from './BazalConfig';

class BazalScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showResults : false,
            resultData : []
        }
        console.log(this.props);
    }

    render() {
        return (
		<div>
            <form>
                <div className="form-group">
                    <label htmlFor="vek">Váha:</label>
                    <input type="text" pattern="\d*" className="form-control" id="vek" onChange={this.updateWeight.bind(this)} autoComplete="off"/>
                </div>
            </form>
                <ButtonGroup vertical block>
                    <BazalConfig configChangeListener={this.configChange.bind(this)}/>
                    <Button
                        bsStyle="primary"
                        bsSize="large"
                        onClick={this.calculateBazal.bind(this)}
                    >Vypočítať
                        <BazalResults resultData={this.state.resultData} showModal={this.state.showResults} closeResults={this.closeResults.bind(this)}/>
                    </Button>
                    <Button
                        bsStyle="danger"
                        bsSize="large"
                        onClick={this.goToMainMenu.bind(this)}
                    >Back</Button>
                </ButtonGroup>
		</div>
        );
    }

    updateWeight(e) {
        const value = parseInt(e.target.value);
        this.setState({ weight : value});
    }

    goToMainMenu() {
        this.props.route.history.push("/");
    }

    calculateBazal() {
        const bazalConfig = this.state.bazalConfig;
        const weight = this.state.weight;
        if(!weight) {
            return;
        }

        var weightRemainder = weight;
        var result = 0;
        var calculation = [];
        calculation.push("Výpočet pre váhu "+ weight+" kg:");
        // first 10 kg
        var resultPart = 0;
        if(weightRemainder <= 10) {
            resultPart = weightRemainder * bazalConfig.until10;
            calculation.push(weightRemainder + " * " + bazalConfig.until10 + " = " + resultPart);
            calculation.push("Bazál: "+resultPart+" ml.");
            this.setState({resultData : calculation, showResults: true});
            return;
        } else {
            resultPart = 10 * bazalConfig.until10;
            calculation.push(10 + " * " + bazalConfig.until10 + " = " + resultPart);
            weightRemainder -= 10;
        }
        result += resultPart;

        // next 10 kg
        resultPart = 0;
        if(weightRemainder <= 10) {
            resultPart += weightRemainder * bazalConfig.until20;
            calculation.push(weightRemainder + " * " + bazalConfig.until20 + " = " + resultPart);
            result += resultPart;
            calculation.push("Bazál: "+result+" ml.");
            this.setState({resultData : calculation, showResults: true});
            return;
        } else {
            resultPart = 10 * bazalConfig.until20;
            calculation.push(10 + " * " + bazalConfig.until20 + " = " + resultPart);
            weightRemainder - 10;
        }
        result += resultPart;

        // rest of weight
        resultPart = weightRemainder * bazalConfig.above20;
        calculation.push(weightRemainder + " * " + bazalConfig.above20 + " = " + resultPart);
        result += resultPart;
        calculation.push("Bazál: "+result+" ml.");
        this.setState({resultData : calculation, showResults: true});
    }

    closeResults() {
        this.setState({resultData : [], showResults: false});
    }

    configChange(newConfig) {
        this.setState({
            bazalConfig : newConfig
        });
    }

}

export default BazalScreen;