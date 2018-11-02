import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import {
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  LayoutAnimation,
  UIManager,
  Image,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card, Button, Section } from './common';


class MainPage extends Component {

  render(){
      return (
        <Card>
          <CardSection>
            <TouchableOpacity onPress={() => Actions.Register()}>
            <Text>  إنشاء حساب </Text>
               </TouchableOpacity>
            </CardSection>
            <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 2,
                  }}
                />
          <CardSection>
            <TouchableOpacity onPress={() => Actions.Login()}>
            <Text> تسجيل الدخول </Text>
            </TouchableOpacity>
          </CardSection>
        </Card>
      );
    }
  }
export default MainPage;
