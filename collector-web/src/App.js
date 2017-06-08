import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import logo from './logo.svg';
import LoginComponent from './components/login-component';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className ="loginContainer">
          <LoginComponent />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
