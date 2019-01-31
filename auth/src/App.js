import firebase from '@firebase/app';
import React, {Component} from 'react';
import {View} from 'react-native';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCi9ULLEwYU2vEbv3VxYbhtdHuotsncsts',
            authDomain: 'authentication-2af0e.firebaseapp.com',
            databaseURL: 'https://authentication-2af0e.firebaseio.com',
            projectId: 'authentication-2af0e',
            storageBucket: 'authentication-2af0e.appspot.com',
            messagingSenderId: '622087144088'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm />
            </View>
        );
    }
}

export default App;