import React from 'react';
import { View } from 'react-native';

const CardSection = ({children, justi, flex}) => {
  return (
    <View style={ {  borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: justi,
    flexDirection: 'row',
    position: 'relative',
    borderColor: 'black',
    flex: flex,}}>
      {children}
    </View>
  );
};

export default CardSection;
