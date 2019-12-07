import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation/Navigation';
import Header from './Header/Header';
import Discounts from './Discounts/Discounts';

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
      </div>
    );
  }
}

export default App;
