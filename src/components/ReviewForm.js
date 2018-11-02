import React, { Component } from 'react';
import { View, Text, Picker, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { WriteReview, reviewUpdate } from '../actions';
import { CardSection, Input } from './common';


class ReviewForm extends Component {
  onButtonPress() {
  const { UserComment, rate } = this.props;
  const { uid } = this.props.business;

  this.props.WriteReview({ UserComment, uid, UserName: 'Fahad', rateing_image: 'https://i.imgur.com/XfmfiiG.png', rate: rate || '1' });
}
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="تعليق المستخدم"
            placeholder="اكتب مراجعتك هنا"
            value={this.props.UserComment}
            onChangeText={value => this.props.reviewUpdate({ prop: 'UserComment', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>التقييم:</Text>
          </CardSection>

          <CardSection style={{ marginLeft: 5, marginRight: 5, color: 'white' }}>
          <Picker
            style={{ flex: 1, height: 44 }}
            itemStyle={{ height: 44, borderWidth: 1 }}
            selectedValue={this.props.rate}
            onValueChange={value => this.props.reviewUpdate({ prop: 'rate', value })}
          >
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
          </Picker>
        </CardSection>

        <CardSection>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={this.onButtonPress.bind(this)}
          >
          <Text style={styles.textStyle}> اضغط هنا لإرسال مراجعتك </Text>
        </TouchableOpacity>
</CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
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

const mapStateToProps = (state) => {
  const { UserComment, rate } = state.reviewForm;

  return { UserComment, rate };
};

export default connect(mapStateToProps, { WriteReview, reviewUpdate })(ReviewForm);
