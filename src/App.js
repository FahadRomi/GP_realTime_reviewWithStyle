import React, { Component } from 'react';
import { View, ScrollView  } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducer';
import { Header } from './components/common';
import Business from './components/Business';
import Reviews from './components/Reviews';
import AlbumList from './components/AlbumList';
import RouterComponent from './Router';

class App extends Component {
  componentWillMount() {
   const config = {
    apiKey: 'AIzaSyBVbAxLZjjHCtxhXLp_96sYS_XMp4zRAwA',
    authDomain: 'gp-2-b1457.firebaseapp.com',
    databaseURL: 'https://gp-2-b1457.firebaseio.com',
    projectId: 'gp-2-b1457',
    storageBucket: 'gp-2-b1457.appspot.com',
    messagingSenderId: '432457542122'
  };


   firebase.initializeApp(config);
}
render() {
   const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
   return (
    <Provider store={store}>

      <View style={{ flex: 1, marginBottom: 10 }}>
        <RouterComponent />
      </View>

    </Provider>

  );
}
}

export default App;
