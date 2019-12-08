import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation/Navigation';
import Header from './Header/Header';
import Discounts from './Discounts/Discounts';
import Discover from './Discover/Discover';

class App extends Component {
  /*
  constructor(){
    super();

  }*/

  render(){
    return(
      <div>
        <Navigation />
        <Header />
        <Discounts />
        <Discover />
      </div>
    );
  }
}

export default App;
