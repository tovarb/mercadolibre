import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation/Navigation';
import Header from './Header/Header';
import Discounts from './Discounts/Discounts';
import Discover from './Discover/Discover';
import Categories from './Categories/Categories';
import Benefits from './Benefits/Benefits';
import Footer from './Footer/Footer';

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
        <Categories />
        <Benefits />
        <Footer />
      </div>
    );
  }
}

export default App;
