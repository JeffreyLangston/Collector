import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

export default class LoginComponent extends React.Component{

    constructor(props){
        super(props);

    }

    render() {
    const buttonStyle = {
        backgroundColor: 'transparent',
        color: 'white',
        verticalAlign: 'middle',
    };

    const iconStyles = {
       marginRight: 24,
    };

    const appChildren = 
        <div>
            <FlatButton label="Save" style={buttonStyle} onClick={this.props.loginClick} />
            <FontIcon className="fa fa-book" style={buttonStyle}></FontIcon>
        </div>
    ;

    const title =  <FlatButton label="Collector" style={buttonStyle} onClick={this.props.loginClick} />
    ;

        return (
            <div>
                <AppBar title = {title}
                    iconElementRight={appChildren} >
                </AppBar>
                <h2>Main</h2>
            </div>
        )
    }
}

