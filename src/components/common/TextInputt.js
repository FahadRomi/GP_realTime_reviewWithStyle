import React from 'react';
import { TextInput, View, Text } from 'react-native';

const TextInputt = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;
	return (
		<View style={containerStyle} >
			<Text style={labelStyle} >{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
			 	style={inputStyle}
			 	value={value}
			 	onChangeText={onChangeText}
				autoCorrect={false}
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingLeft: 80,
		fontSize: 15,
		lineHeight: 23,
		flex: 2
	},
	labelStyle: {
		fontSize: 15,
		paddingLeft: 10,
		paddingRight: 5,
		flex: 1
 	},
	containerStyle: {
		height: 50,
		flex: 1,
		flexDirection: 'row-reverse',
		alignItems: 'center'
	}


};
export { TextInputt };
