import React, { Component } from 'react';
import Proptypes from 'prop-types';
import './App.css';
import './global.scss';
import { Nav } from './Nav';
import { Page } from './Page';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
   this.setState({
   })
  }
  render() {
    // const {} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Nav/>
          <h1 className="App-title">Welcome to React</h1>
          <h2>Yo</h2>
        </header>
      </div>
    );
  }
}

export default App;
