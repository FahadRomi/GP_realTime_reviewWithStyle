import React from 'react';
import { View } from 'react-native';

const SubCard = ({ children, justi }) => {
  return (
    <View
style={{ borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: justi,
    flexDirection: 'row',
    position: 'relative',
    }}
    >
      {children}
    </View>
  );
};

export { SubCard };
