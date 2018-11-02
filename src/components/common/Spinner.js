import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return (
  <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
  <ActivityIndicator size={size || 'large'} />
  </View>
);
};

export { Spinner };
