import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import ButtonStyles from '../../assets/styles/button-styles';
import ToolbarStyles from '../../assets/styles/toolbar-styles';

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper style={ToolbarStyles.toolbarStyle}>
        <FlatButton label="New" style={ButtonStyles.actionButtonStyle} onClick={this.props.newClick} />
        <FlatButton label="Save" style={ButtonStyles.actionButtonStyle} onClick={this.props.saveClick} />
        <FlatButton label="Delete" style={ButtonStyles.actionButtonStyle} onClick={this.props.deleteClick} />
      </Paper>
    );
  }
}
