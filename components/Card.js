import React from 'react';
import { View, StyleSheet } from 'react-native';
const Card = ({ children, style }) => {
	return <View style={{ ...styles.inputContainer, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
	inputContainer: {
		padding: 20,
		shadowColor: 'black',
		shadowOffset: {
			height: 0,
			width: 2,
		},

		shadowRadius: 6,
		borderRadius: 10,
		shadowOpacity: 0.26,
		backgroundColor: 'white',
		elevation: 5,
	},

	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
});
export default Card;
