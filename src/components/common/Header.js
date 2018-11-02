// import libraries for making a components
import React from 'react';
import { Text, View } from 'react-native';

// make a Component
const Header = (props) =>
// const { textStyle, viewStyle } = styles;
 (
<View style={styles.viewStyle}>
  <Text style={styles.textStyle}> {props.headerText} </Text>

</View>
);
//const Header = () => {
// const { textStyle, viewStyle } = styles;
// return (
// <View style={viewStyle}>
//   <Text style={textStyle}> Albums! </Text>
// </View>
// );
// };

const styles = {
  viewStyle: {
    backgroundColor: '#E0F8F8',
    justifyContent: 'center', //up-down flex-start flex-end
    alignItems: 'center', // left right flex-start flex-end
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
textStyle: {
  fontSize: 20,
}

};

// make it avaliable to other parts of the app
export  { Header };
