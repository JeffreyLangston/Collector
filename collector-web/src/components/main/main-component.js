import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class LoginComponent extends React.Component{

    constructor(props){
        super(props);
        this.state =
        {
            open:false
        };

        //this.handleToggle = this.handleToggle.bind(this);
        //this.handleClose = this.handleClose.bind(this);
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
    const appBarButtonStyle = {
        backgroundColor: 'transparent',
        color: 'white',
        verticalAlign: 'middle',
    };

     const actionButtonStyle = {
        backgroundColor: 'transparent',
        color: 'black',
        verticalAlign: 'middle',
    };

    const iconStyles = {
       marginRight: 24,
    };

    const title = 
        <div>
            <FontIcon className="fa fa-book" style={appBarButtonStyle}></FontIcon>
            <FlatButton label="Collector" style={appBarButtonStyle} onClick={this.props.homeClick} />
        </div>
    ;

    const leftMenu = 
        <div>
           <FlatButton label="Menu" style={actionButtonStyle} onClick={this.handleToggle} />
        </div>
    ;

    const rightMenu = 
        <div>
            <FlatButton label="Logout" style={appBarButtonStyle} onClick={this.props.logoutClick} />
        </div>
    ;

        return (
            <div>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}

                >
                    <MenuItem onTouchTap={this.handleClose}>Books</MenuItem>
                    <MenuItem onClick={this.handleClose}>Comics</MenuItem>
                    <MenuItem>TV</MenuItem>
                    <MenuItem>Movies</MenuItem>
                    <MenuItem>Anime</MenuItem>
                    <MenuItem>Board Games</MenuItem>
                </Drawer>
                <AppBar title = {title}
                    iconElementLeft={leftMenu}
                    iconElementRight={rightMenu} >
                    
                </AppBar>
                <Paper>
                    <FlatButton label="New" style={actionButtonStyle} onClick={this.props.newClick} />
                    <FlatButton label="Save" style={actionButtonStyle} onClick={this.props.saveClick} />
                    <FlatButton label="Delete" style={actionButtonStyle} onClick={this.props.deleteClick} />
                </Paper>
            </div>
        )
    }
}

