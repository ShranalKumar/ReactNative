import firebase from '@firebase/app';
import React, {Component} from 'react';
import {View} from 'react-native';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = {loggedIn: null}

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCi9ULLEwYU2vEbv3VxYbhtdHuotsncsts',
            authDomain: 'authentication-2af0e.firebaseapp.com',
            databaseURL: 'https://authentication-2af0e.firebaseio.com',
            projectId: 'authentication-2af0e',
            storageBucket: 'authentication-2af0e.appspot.com',
            messagingSenderId: '622087144088'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                );
            case false:
                return <LoginForm />;

            default:
                return <Spinner size='large' />
        }       
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;