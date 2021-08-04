import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	Dimensions,
	Platform,
	TouchableNativeFeedback,
} from 'react-native';
import colors from '../constants/colors';
const MainButton = ({ children, onPress, style }) => {
	let ButtonComponent = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		ButtonComponent = TouchableNativeFeedback;
	}

	return (
		<View style={styles.buttonContainer}>
			<ButtonComponent onPress={onPress}>
				<View style={{ ...styles.button, ...style }}>
					<Text style={styles.buttonText}>{children}</Text>
				</View>
			</ButtonComponent>
		</View>
	);
};
const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		paddingHorizontal: Dimensions.get('window').width > 350 ? 20 : 10,
		paddingVertical: Dimensions.get('window').width > 350 ? 12 : 6,
		borderRadius: 10,
	},
	buttonContainer: {
		borderRadius: 10,
		overflow: 'hidden',
	},
	buttonText: {
		color: 'white',
		fontFamily: 'open-sans-regular',
		fontSize: 15,
		textAlign: 'center',
	},
});
export default MainButton;
