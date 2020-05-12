import React, { Component } from 'react';
import { Home } from './Home';
import { Contact } from './Contact';
import { NavigationBar } from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div id="Home">
          <Home />
        </div>
        <div id="Contact">
          <Contact />
        </div>
      </div>
      
    );
  }
}

export default App;
