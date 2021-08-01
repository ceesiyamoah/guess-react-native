import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
const Input = ({ style, ...rest }) => {
	return <TextInput {...rest} style={{ ...style, ...styles.input }} />;
};

const styles = StyleSheet.create({
	input: {
		height: 30,
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		marginVertical: 10,
	},
});
export default Input;
