import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation/Navigation';

class App extends Component {
  /*
  constructor(){
    super();

  }*/

  render(){
    return(
      <div>
        <Navigation />
      </div>
    );
  }
}

export default App;
