import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Flatbuttom from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import Fblogin from 'react-icons/lib/fa/facebook-square';
import ColorStyles from  '../../assets/styles/color-styles';
import FontStyles from '../../assets/styles/font-styles';
import CardStyles from '../../assets/styles/card-styles';

class Facebooklogin extends React.Component {
    render() {
        return (<div><Fblogin /><div>Continue with Facebook</div></div>)
    }
}

export default class LoginComponent extends React.Component{

    constructor(props){
        super(props);
 
    }

    render() {
        
        return (
            <div backgroundColor="blue">
                <div></div>
            <Card>
                <CardHeader title="Collector" titleStyle={FontStyles.TitleStyle}
                style={CardStyles.CardHeaderStyle}
                >
                </CardHeader>
                <CardText className="login-container">
                    <TextField className ="login-container__user-name-input"
                        floatingLabelText="User Name"
                        floatingLabelFocusStyle={ColorStyles.messageStyle}
                        floatingLabelStyle={ColorStyles.messageStyle}/>

                    <TextField 
                        floatingLabelText="Password" className="login-container__password-input"
                        type = 'password'
                        floatingLabelFocusStyle={ColorStyles.messageStyle}
                        floatingLabelStyle={ColorStyles.messageStyle}/>

                </CardText>

                <CardMedia>
                </CardMedia>

                <CardTitle>
                </CardTitle>

                <CardActions className="login-button-container">
                        <RaisedButton label="login" secondary={true} onClick={this.props.loginClick} />
                        <RaisedButton  label="continue with facebook" labelStyle={{color:ColorStyles.white}} icon={<Fblogin> </Fblogin>} 
                        backgroundColor={ColorStyles.primaryColorDark} onClick={this.props.loginClick}/>
                        
                </CardActions>
            </Card>
            </div>
        );
    }

}