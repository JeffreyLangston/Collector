import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Flatbuttom from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import ColorStyles from '../../assets/styles/color-styles';
import FontStyles from '../../assets/styles/font-styles';
import CardStyles from '../../assets/styles/card-styles';
import FacebookLogin from './facebook-login-component';

export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader
            title="Collector"
            titleStyle={FontStyles.TitleStyle}
            style={CardStyles.CardHeaderStyle}
          />
          <CardText className="login-container">
            <TextField
              className="login-container__user-name-input"
              floatingLabelText="User Name"
              floatingLabelFocusStyle={ColorStyles.messageStyle}
              floatingLabelStyle={ColorStyles.messageStyle}
            />

            <TextField
              floatingLabelText="Password"
              className="login-container__password-input"
              type="password"
              floatingLabelFocusStyle={ColorStyles.messageStyle}
              floatingLabelStyle={ColorStyles.messageStyle}
            />

          </CardText>

          <CardMedia />

          <CardTitle />

          <CardActions className="login-button-container">
            <RaisedButton label="login" secondary onClick={this.props.loginClick} />
            <FacebookLogin loginClick={this.props.loginClick} />

          </CardActions>
        </Card>
      </div>
    );
  }
}
