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
import gridColumn from '../grid/grid-column';
import gridRow from '../grid/grid-row';
import gridCell from '../grid/grid-cell';

injectTapEventPlugin();

export default class MainComponent extends React.Component{

    constructor(props){
        super(props);
        this.state =
        {
            sliderMenuOpen:false,
            gridColumns: [
               {"Title": new gridColumn('Title')},
                {'Author': new gridColumn('Author')},
                {'Own': new gridColumn('Own')},
                {'Rating': new gridColumn('Rating')},
                {'Want': new gridColumn('Want')}
            ],
            gridData: [
            new gridRow(
                1, {
                    "Title": new gridCell('Title', 'book1'),
                    "Author": new gridCell('Author', 'author1'),
                    'Own': new gridCell('Own', 'False'),
                    'Rating': new gridCell('Rating', '1'),
                    'Want': new gridCell('Want', 'True')
                    }
                ),
            new gridRow(
                2, {
                    "Title": new gridCell('Title', 'book2'),
                    "Author": new gridCell('Author', 'author2'),
                    'Own': new gridCell('Own', 'False'),
                    'Rating': new gridCell('Rating', '2'),
                    'Want': new gridCell('Want', 'True')
                    }
                ) 
            ]
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.setMenuState = this.setMenuState.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.undoChanges = this.undoChanges.bind(this);
        this.handleCellChange = this.handleCellChange.bind(this);
        
    }
   
    handleCellChange = (event) => {
        this.setState((previousState) => {
            console.log(event);
            //           previousState.xyz = 'blurg';
           return previousState;
        });
    }

    addItem(){
        
    }

    deleteItem(){

    }

    saveItem(){

    }

    undoChanges(){

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
                <Grid gridColumns={this.state.gridColumns} gridData={this.state.gridData} handleCellChange={this.handleChange}/>
            </div>
        )
    }
}

