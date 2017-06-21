import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan500} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import logo from './logo.svg';
import LoginComponent from './components/login/login-component';
import MainComponent from './components/main/main-component';
import './App.css';

const muiTheme = getMuiTheme({
    fontFamily: 'Quicksand'
})

class App extends Component {
  constructor(props){
        super(props);

        this.loginCallback = this.loginCallback.bind(this);

        this.state = {
          isUserLoggedIn: false
          };
        
  }

  loginCallback(e){
     this.setState({
      isUserLoggedIn: true
    });
    
  }

  render() {
    let currentView;
    if(!this.state.isUserLoggedIn){
      currentView =  
      <div className ="loginComponent" >
      <LoginComponent loginClick={this.loginCallback} />
      </div>;
      
      }else{
      
        currentView = 
        <div className ="">
          <MainComponent />
        </div>
      }

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        {currentView}
      </MuiThemeProvider>
        
    );
  }
}

export default App;
