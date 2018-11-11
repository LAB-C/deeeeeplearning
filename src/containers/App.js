import React, { Component } from 'react';
import Logos from '../components/Headers/Logo/Logo'
import Login from '../components/Headers/Login/Login'
import Banner from '../components/Headers/Banner/Banner.js'
import { Route, Switch } from 'react-router-dom';
<<<<<<< HEAD

import Home from './Home/Home'
import Signin from './Signin/Signin'
import Signup from './Signup/Signup'
import Mypage from './Mypage/Mypage'
=======
import Home from '../Pages/Home.js';
>>>>>>> master

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logos />
        <Login />
        <nav>
            <Banner />
        </nav>
          <main>
              <div>
                  <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/signin" exact component={Signin} />
                      <Route path="/signup" exact component={Signup} />
                      <Route path="/mypage" exact component={Mypage} />
                  </Switch>
              </div>
      </main>
      </div>
    );
  }
}

export default App;
