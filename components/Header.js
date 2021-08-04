import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import colors from '../constants/colors';
import defaultStyles from '../constants/default-styles';
const Header = ({ title }) => {
	return (
		<View style={styles.header}>
			<Text style={{ ...defaultStyles.bodyText }}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: Dimensions.get('window').height / 9,
		paddingTop: Dimensions.get('window').height > 600 ? 36 : 20,
		backgroundColor: colors.primary,
		textAlignVertical: 'center',
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Header;
