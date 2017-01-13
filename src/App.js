import React, { Component } from 'react';
import Layout from './Layout';
import HomePageMenu from './HomePageMenu';
import Lieky from './Lieky';
import {Router, Route, browserHistory } from 'react-router';

class App extends Component {
  render() {
    return (
		<Layout>
			<Router history={browserHistory}>
				<Route path="/" component={HomePageMenu} />
				<Route path="/lieky" component={Lieky}/>
			</Router>
		</Layout>
    );
  }

  goToOtherPage() {
    console.log('going to other page');
  }

}

export default App;
