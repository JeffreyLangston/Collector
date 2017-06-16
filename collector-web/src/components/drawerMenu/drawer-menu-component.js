import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

export default class SlideMenu extends React.Component{

    constructor(props){
        super(props);
  
    }

    render() {
        const isopen = this.props.menuOpen;

        return(
        <Drawer
            docked={false}
            width={200}
            open={isopen}
            onRequestChange={(menuOpen) => this.props.setMenuState(menuOpen)}

        >
            <MenuItem onTouchTap={this.props.onMenuClose}>Books</MenuItem>
            <MenuItem onClick={this.props.onMenuClose}>Comics</MenuItem>
            <MenuItem>TV</MenuItem>
            <MenuItem>Movies</MenuItem>
            <MenuItem>Anime</MenuItem>
            <MenuItem>Board Games</MenuItem>
        </Drawer>)
    }
}