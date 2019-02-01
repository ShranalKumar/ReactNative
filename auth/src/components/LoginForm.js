import firebase from '@firebase/app';
import '@firebase/auth';
import React, {Component} from 'react';
import {Card, CardSection, Button, Input} from './common';

class LoginForm extends Component {
    state = {email: '', password: ''};

    onButtonPress() {
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder='user@domain.com'
                        label='Email'
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                    />                    
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder='password'
                        label='Password'
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;