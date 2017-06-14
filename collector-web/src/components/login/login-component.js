import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Flatbuttom from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {red500, blue500, orange500, blue900,white } from 'material-ui/styles/colors';
import Fblogin from 'react-icons/lib/fa/facebook-square';


const styles = {
    errorStyle: {color:red500},
    warningStyle: {color:orange500},
    messageStyle: {color:blue500},
    facebookStyle: {color:blue900},
};


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
                <CardHeader title="Collector" titleStyle={{
                    fontFamily:  'Pacifico',
                    color:white,
                    fontSize: 45,
                    backgroundColor: blue500,
                }
                }
                style={{
                    backgroundColor: blue500,
                }}
                >
                </CardHeader>
                <CardText className="login-container">
                    <TextField className ="login-container__user-name-input"
                        floatingLabelText="User Name"
                        floatingLabelFocusStyle={styles.messageStyle}
                        floatingLabelStyle={styles.messageStyle}/>

                    <TextField 
                        floatingLabelText="Password" className="login-container__password-input"
                        type = 'password'
                        floatingLabelFocusStyle={styles.messageStyle}
                        floatingLabelStyle={styles.messageStyle}/>

                </CardText>

                <CardMedia>
                </CardMedia>

                <CardTitle>
                </CardTitle>

                <CardActions className="login-button-container">
                        <RaisedButton label="login" secondary={true} onClick={this.props.loginClick} />
                        <RaisedButton  label="continue with facebook" labelStyle={{color:white}} icon={<Fblogin> </Fblogin>} backgroundColor={blue900} onClick={this.props.loginClick}/>
                        
                </CardActions>
            </Card>
            </div>
        );
    }

}