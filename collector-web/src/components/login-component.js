import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Flatbuttom from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import {red500, blue500, orange500} from 'material-ui/styles/colors';

const styles = {
    errorStyle: {color:red500},
    warningStyle: {color:orange500},
    messageStyle: {color:blue500},
};



export default class LoginComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <Card>
                <CardHeader title="Collector" subtitle="Login">

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

                <CardActions>
                        <Flatbuttom label="Login"/>
                </CardActions>
            </Card>
        );
    }

}