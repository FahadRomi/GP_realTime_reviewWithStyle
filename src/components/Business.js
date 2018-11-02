import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  LayoutAnimation,
  UIManager,
  Image,
  TextInput,
  ScrollView
} from "react-native";

import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import { CardSection, Card, Button } from "./common";
import * as actions from "../actions";

class Business extends Component {


  render() {

    const { buttonStyle, textStyle, BussinesImageStyle, ViewCardStyle, RatingStyle,
       DescriptionViewStyle,DescriptionTextStyle,ReviewViewStyle } = styles;
    const {category, restaurant_name, rateing_image, image,description,Contact_information} = this.props.business;
      console.log(this.props.record);
    return (
      <ScrollView>
        <Card>

          <View style={ViewCardStyle}>
            <Image
              style={BussinesImageStyle}
              source={{ uri:image  }} />
          </View>

          <View style={ViewCardStyle}>
            <Image
              style={RatingStyle}
              source={{uri:rateing_image}}
            />
          </View>

          <CardSection>
            <Text> الوصف: </Text>
          </CardSection>


          <CardSection>
                      <View style={DescriptionViewStyle}>
                        <Text style={DescriptionTextStyle}>
                          {description}
                        </Text>
                      </View>
                    </CardSection>

          <CardSection>
            <Text> معلومات جهة الاتصال: { Contact_information }</Text>
          </CardSection>

          <CardSection>
            <TouchableOpacity
              style={buttonStyle}
              onPress={() => Actions.reviewForm({ business: this.props.business })}
              >
              <Text style={textStyle}> اكتب مراجعه </Text>
            </TouchableOpacity>
          </CardSection>

          <CardSection>
            <TouchableOpacity
              style={buttonStyle}
              onPress={() => Actions.reviews({ business: this.props.business })}
              >
              <Text style={textStyle}> المراجعات </Text>
            </TouchableOpacity>
          </CardSection>
        </Card>
        <View style={{ marginBottom: 100 }} />

      </ScrollView>
    );
  }
}

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  BussinesImageStyle: {
    resizeMode: "contain",
    width: 300,
    height: 100
  },
  RatingStyle:{
    width: 100,
    height: 20,
    paddingLeft: 5
  },
  ViewCardStyle:{
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#e6f3ff",
    justifyContent: "center",
    flexDirection: "row",
    borderColor: "#ddd",
    postion: "relative"

  },
  DescriptionViewStyle:{
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5
  },
  DescriptionTextStyle:{
    width: 250,
    textAlign: 'right'
  },
  ReviewViewStyle:
  {
    marginTop: 10,
    marginBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  }
};



export default (Business);
