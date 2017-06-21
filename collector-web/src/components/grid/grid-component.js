import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import gridColumn from './grid-column';
import gridRow from './grid-row';
import gridCell from './grid-cell';

 export default class Grid extends React.Component{

    constructor(props){
        super(props);
        
        this.state =
        {
            gridColumns: [
                new gridColumn('Title'),
                new gridColumn('Author'),
                new gridColumn('Own'),
                new gridColumn('Rating'),
                new gridColumn('Want')
                ],
            gridData: [
            new gridRow([
                new gridCell('Title', 'book1'),
                new gridCell('Author', 'author1'),
                new gridCell('Own', 'False'),
                new gridCell('Rating', '1'),
                new gridCell('Want', 'True')
            ])
            ]
        };
    }
 
    render() {
        const gridColumns = this.state.gridColumns;
        const columnHeaders = gridColumns.map((gridColumn) =>
             <TableHeaderColumn>
                {gridColumn.columnName}
            </TableHeaderColumn>
        );

        const gridData = this.state.gridData.map((gridRow) =>
         <TableRow>
            {gridRow.gridCells.map((gridCell) => 
                <TableRowColumn>
                    {gridCell.value}
                </TableRowColumn>)    
                }
         </TableRow>
        );

        

        return(
        <Table>
            <TableHeader>
                <TableRow>
                   {columnHeaders}
                </TableRow>
            </TableHeader>

            <TableBody>
                {gridData}
            </TableBody>
        </Table>
        )
    }
 }