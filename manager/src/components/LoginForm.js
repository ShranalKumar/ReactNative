import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardSection, Input, Button} from './common';
import {emailChanged} from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        onChangeText={this.onEmailChange.bind(this)}
                        label='Email'
                        placeholder='user@domain.com'
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password'
                        placeholder='password'
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    };
}

export default connect(null, {emailChanged})(LoginForm);