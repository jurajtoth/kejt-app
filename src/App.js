import React, { Component } from 'react';
import Layout from './Layout';
import MainMenu from './MainMenu';
import BazalScreen from './bazal/BazalScreen';
import {Router, Route, browserHistory } from 'react-router';
import DocumentMeta from 'react-document-meta';

class App extends Component {

  constructor() {
    super();
    this.state = {
      title : 'Kejt app',
    };
  }

  render() {
    const routeChange = this.routeChange.bind(this);
    const meta = {
      title: 'Test',
      meta : {
        name : {
          viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        }
      }
    };
    return (
    <div>
      <DocumentMeta {...meta} />
      <Layout title={this.state.title}>
        <Router history={browserHistory}>
          <Route title="Kejt app" path="/" component={MainMenu} onEnter={routeChange} history={browserHistory}/>
          <Route title="Bazál" path="/bazal" component={BazalScreen} onEnter={routeChange} history={browserHistory}/>
        </Router>
      </Layout>
    </div>
    );
  }

  // change title of current screen in state
  routeChange(a, b, callback) {
    this.setState({
      title: a.routes[0].title
    });
    console.log(a.routes[0].title);
    callback();

  }

  goToOtherPage() {
    console.log('going to other page');
  }

}

export default App;
