import React, { Component } from 'react';
import * as firebase from 'firebase';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBMQ74ENPjtjY9NKsrMwt437LkUY_kz9CQ',
      authDomain: 'authentication-a4d76.firebaseapp.com',
      databaseURL: 'https://authentication-a4d76.firebaseio.com',
      projectId: 'authentication-a4d76',
      storageBucket: 'authentication-a4d76.appspot.com',
      messagingSenderId: '1085951790442',
    };
    firebase.initializeApp(config);
  }

  render() {
    return <Router />;
  }
}

export default App;
