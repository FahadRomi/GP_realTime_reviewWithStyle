import React, { Component } from 'react';
import { ListView, Text, View,ScrollView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import AlbumDetail from './AlbumDetail';
import { BusinessesFetch } from '../actions';

class AlbumList extends Component {

  componentWillMount() {
      this.props.BusinessesFetch();
      this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
      // nextProps are the next set of props that this component
      // will be rendered with
      // this.props is still the old set of props

      this.createDataSource(nextProps);
    }

    createDataSource({ businesses }) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(businesses);
  }
  renderRow(business) {
      return <AlbumDetail business={business} />;
  }

// renderBusinesses() {
//   return this.props.libraries.map(lib =>
//     <AlbumDetail key={lib.Id} record={lib} />
//   );
// }

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

const MapStateTpProps = state => {
  console.log(state.businesses);
  const businesses = _.map(state.businesses, (val, uid) => {
    return { ...val, uid };
});
  return { businesses };
};

export default connect(MapStateTpProps, { BusinessesFetch })(AlbumList);
