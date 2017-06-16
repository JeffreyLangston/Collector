import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ButtonStyles from '../../assets/styles/button-styles';

 export default class MainAppBar extends React.Component{

    constructor(props){
        super(props);
  
    }
 
   render() {

    const title = 
        <div>
            <FontIcon className="fa fa-book" style={ButtonStyles.appBarButtonStyle}></FontIcon>
            <FlatButton label="Collector" style={ButtonStyles.appBarButtonStyle} onClick={this.props.homeClick} />
        </div>
    ;

    const leftMenu = 
        <div>
           <FlatButton label="Menu" style={ButtonStyles.actionButtonStyle} onClick={this.props.openSliderMenu} />
        </div>
    ;

    const rightMenu = 
        <div>
            <FlatButton label="Logout" style={ButtonStyles.appBarButtonStyle} onClick={this.props.logoutClick} />
        </div>
    ;
    return (
        <AppBar title = {title}
            iconElementLeft={leftMenu}
            iconElementRight={rightMenu} >  
        </AppBar>)
    }
}