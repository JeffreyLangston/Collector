import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import SlideMenu from '../drawerMenu/drawer-menu-component';
import MainAppBar from '../header/main-appbar-component';
import Toolbar from '../toolbar/toolbar-component';
import Grid from '../grid/grid-component';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

export default class LoginComponent extends React.Component{

    constructor(props){
        super(props);
        this.state =
        {
            sliderMenuOpen:false
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.setMenuState = this.setMenuState.bind(this);
        
    }
   
    handleToggle(){
        this.setState({
            sliderMenuOpen: !this.state.sliderMenuOpen
        });
    }

     setMenuState(state){
        this.setState({
            sliderMenuOpen: state
        });
    }

    handleClose(){
        this.setState({
            sliderMenuOpen: false
        });
    }
  
    render() {
    const isSliderMenuOpen = this.state.sliderMenuOpen;
 
  

        return (
            <div>
                <SlideMenu menuOpen={isSliderMenuOpen} onMenuClose={this.handleClose} setMenuState={this.setMenuState} />
                <MainAppBar openSliderMenu={this.handleToggle}/>
                <Toolbar />
                <Grid />
            </div>
        )
    }
}

