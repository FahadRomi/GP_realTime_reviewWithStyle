import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ label, onChangeText, value, placeholder, secureTextEntry }) => {
return (
<View
style={{
height: 40,
flex: 1,
flexDirection: 'row',
alignItems: 'center'

  }}
>
<Text
style={{ fontWeight: 'bold',
fontSize: 15,
alignSelf: 'center',
flex: 1,

}}
>
 { label }:</Text>
<TextInput
onChangeText={onChangeText}
value={value}
autoCorrect={false}
placeholder={placeholder}
secureTextEntry={secureTextEntry}

style={{
    // height: 30,
    // width: 200,
    // backgroundColor: '#fff',
    // borderRadius: 5,
    // borderWidth: 1.5,
    // borderColor: '#007aff',
    flex: 2,
    marginRight: 50,
    alignSelf: 'center',
    textAlign: 'center',
 }}
/>
</View>
);
};

export { Input };
