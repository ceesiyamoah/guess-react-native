import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';
const MainButton = ({ children, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{children}</Text>
			</View>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		paddingHorizontal: 20,
		paddingVertical: 12,
		borderRadius: 10,
	},
	buttonText: {
		color: 'white',
		fontFamily: 'open-sans-regular',
		fontSize: 15,
	},
});
export default MainButton;
