import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import MainButton from '../components/MainButton';
import colors from '../constants/colors';
import defaultStyles from '../constants/default-styles';
const GameOverScreen = ({ numOfRounds, restartGame, userNum }) => {
	return (
		<View style={styles.screen}>
			<Text style={defaultStyles.titleText}>Game Over</Text>
			<View style={styles.imageHolder}>
				<Image
					source={require('../assets/success.png')}
					// source={{
					// 	uri: 'https://images.unsplash.com/photo-1627531056429-fd40d48acf0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
					// }}
					resizeMode='cover'
					style={styles.image}
				/>
			</View>
			<Text style={(defaultStyles.bodyText, styles.num)}>
				It took <Text style={styles.highlight}>{numOfRounds}</Text> rounds to
				guess Number was: <Text style={styles.highlight}>{userNum}</Text>
			</Text>

			<MainButton onPress={restartGame}>New Game</MainButton>
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	num: {
		marginBottom: 10,
	},
	imageHolder: {
		width: '80%',
		height: 300,
		borderRadius: 500,
		overflow: 'hidden',
		borderWidth: 5,
		marginVertical: 30,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	highlight: {
		color: colors.primary,
		fontFamily: 'open-sans-bold',
	},
});
export default GameOverScreen;
