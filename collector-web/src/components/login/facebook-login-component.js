import React from 'react';
import Fblogin from 'react-icons/lib/fa/facebook-square';
import RaisedButton from 'material-ui/RaisedButton';
import ColorStyles from '../../assets/styles/color-styles';

export default class Facebooklogin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RaisedButton
        label="continue with facebook"
        labelStyle={{ color: ColorStyles.white }}
        icon={<Fblogin />}
        backgroundColor={ColorStyles.primaryColorDark}
        onClick={this.props.loginClick}
      />
    );
  }
}
