import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../constants/colors';
const NumberContainer = ({ children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.number}>{children}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		borderColor: colors.secondary,
		padding: 10,
		paddingHorizontal: 10,
		borderRadius: 10,
		borderWidth: 2,
		marginVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	number: {
		fontSize: 22,
		color: colors.secondary,
	},
});
export default NumberContainer;
