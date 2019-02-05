import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import * as firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';

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
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;