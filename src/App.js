import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './containers/home/home';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" component={Home} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
