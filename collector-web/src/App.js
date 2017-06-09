import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan500} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import logo from './logo.svg';
import LoginComponent from './components/login-component';
import './App.css';

const muiTheme = getMuiTheme({
    fontFamily: 'Quicksand'
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className ="loginComponent">
          <LoginComponent />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
