 import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

 export default class Toolbar extends React.Component{

    constructor(props){
        super(props);
  
    }
 
    render() {
        return(
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>
                        Name
                    </TableHeaderColumn>
                </TableRow>
            </TableHeader>

            <TableBody>
                <TableRow>
                    <TableRowColumn>
                        New Book
                    </TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
        )
    }
 }