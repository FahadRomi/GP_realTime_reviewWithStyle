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
  ScrollView,
  ListView
} from "react-native";
import _ from 'lodash';
import { connect } from "react-redux";
import { CardSection, Card, Button } from "./common";
import { ReviewsFetch }  from "../actions";
import ReviewsComponent from './ReviewsComponent';

class Reviews extends Component {

      componentWillMount() {
        const { uid } = this.props.business
        this.props.ReviewsFetch({ uid });
          this.createDataSource(this.props);
        }

        componentWillReceiveProps(nextProps) {
          // nextProps are the next set of props that this component
          // will be rendered with
          // this.props is still the old set of props

          this.createDataSource(nextProps);
        }

        createDataSource({ Reviewss }) {
          const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          });

          this.dataSource = ds.cloneWithRows(Reviewss);
      }

  renderRow(Reviewss) {
      return (
        <View>
      <ReviewsComponent Reviewss={Reviewss} />
      </View>

    );
  }
    render() {
              return (

                <ListView
                  enableEmptySections
                  dataSource={this.dataSource}
                  renderRow={this.renderRow}
                />
              );
        }
}


const MapStateTpProps = (state) => {
  const Reviewss = _.map(state.reviews, (val, uid) => {
    return { ...val, uid };
});
  return { Reviewss };
};

export default connect(MapStateTpProps, { ReviewsFetch })(Reviews);
