import React, {Component} from 'react';
import {View, Text} from 'react-native'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from '@firebase/app'

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAAVA0OZ0HjFYiJWJuIvWBHmPUznyEztZQ',
            authDomain: 'manager-af593.firebaseapp.com',
            databaseURL: 'https://manager-af593.firebaseio.com',
            projectId: 'manager-af593',
            storageBucket: 'manager-af593.appspot.com',
            messagingSenderId: '481277889290'
          };

          firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>Hello!</Text>
                </View>
            </Provider>
        );
    }
}

export default App;