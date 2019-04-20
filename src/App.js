import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//import Map from './Map.js';
import Leaflet from './leaflet.js'
import Form from './forms/form.js'
import NavBar from './navbar.js'
import './leaflet.css'
import './forms/form.css'

class App extends Component {
  render() { 
    return (
      <div>
        <NavBar />
        <main style={{marginTop: '4vh'}}>
          {/* <p>This is the page content!</p> */}
        </main>
        {/* <Form /> */}
        <Leaflet />
      </div>
    );
  }
}

export default App;
