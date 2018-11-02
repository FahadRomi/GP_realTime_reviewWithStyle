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
import { CardSection, Card, Button } from "./common";
import * as actions from "../actions";


  const  ReviewsComponent = ({ Reviewss }) => {

  const { UserName, UserComment, rateing_image } = Reviewss;
  const {ViewReviewStyle, RatingImageStyle,ReviewStyle,ReviewBody} = styles
    return (
        <Card style={{ flex: 1 }}>
          <CardSection>
            <Text style={{ paddingRight: 5 }}> {UserName}  </Text>
          </CardSection>

          <CardSection style={ReviewStyle}>
            <Text> التقييم: </Text>
          </CardSection>

          <CardSection style={ReviewBody}>
            <Text style={{ width: 250, textAlign: "right" }}>
              {UserComment}

            </Text>


          </CardSection>
          <CardSection>
          <Image
            style={RatingImageStyle}
            source={{uri:rateing_image}}
          />
          </CardSection>
        </Card>
      );
    }


const styles = {
  ViewReviewStyle:
  {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#E0F8F8",
    justifyContent: "space-between",
    flexDirection: "row",
    borderColor: "#ddd",
    postion: "relative"
  },
  RatingImageStyle:
  {
    width: 100,
    height: 20,
    // paddingLeft: 5,
    // marginBottom: 100
  },

  ReviewStyle:{
    padding: 5,
    backgroundColor: "white",
    borderColor: "#ddd",
    postion: "relative",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  ReviewBody:{
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 60,
    backgroundColor: "lightgray",
    borderColor: "#ddd",
    postion: "relative",
    flexDirection: "row",
    justifyContent: "flex-end"
  }
};
export default ReviewsComponent;
