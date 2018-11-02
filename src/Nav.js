import React from 'react';
import { View, ScrollView  } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';
import Business from './components/Business';
import Reviews from './components/Reviews';
import AlbumList from './components/AlbumList';
import App from './App';

 const Nav = StackNavigator({
business: {
  screen: Business
},
app: {
  screen: App,
},
reviews: {
  screen: Reviews
}

});
export default Nav;
