import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home.js';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="Main">
          <Switch>
            <Route exact path="/" component={Home} />
            </Switch>
      </div>
    );
  }
}

export default App;
