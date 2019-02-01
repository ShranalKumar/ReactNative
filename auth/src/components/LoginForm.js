import React, {Component} from 'react';
import {Card, CardSection, Button, Input} from './common';

class LoginForm extends Component {
    state = {email: '', password: ''}

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
                        label='Password'
                    />
                </CardSection>

                <CardSection>
                    <Button>Log In</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;