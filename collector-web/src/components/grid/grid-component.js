import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';


export default class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const gridColumns = this.props.gridColumns;
    const columnHeaders = gridColumns.map((gridColumn, index) =>
      (<TableHeaderColumn key={index}>
        {gridColumn.columnName}
      </TableHeaderColumn>));

    const gridData = this.props.gridData.map((gridRow, rowIndex) =>
      (<TableRow key={rowIndex}>
        {gridRow.gridCells.map((gridCell, cellIndex) =>
              (<TableRowColumn key={cellIndex}>
                <TextField id={`${gridCell.columnName}-${rowIndex}-${cellIndex}`} value={gridCell.value} key={`${rowIndex}-${cellIndex}`} onChange={this.props.handleCellChange} />
               </TableRowColumn>))
                }
       </TableRow>));

        <TextField value={gridData} />;

         return (
          <Table selectable={false}>
             <TableHeader>
              <TableRow>
              {columnHeaders}
            </TableRow>
            </TableHeader>

             <TableBody displayRowCheckbox={false}>
              {gridData}

            </TableBody>
           </Table>
         );
  }
}
