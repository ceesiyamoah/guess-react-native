import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	Button,
	Image,
	Dimensions,
	ScrollView,
} from 'react-native';
import MainButton from '../components/MainButton';
import colors from '../constants/colors';
import defaultStyles from '../constants/default-styles';
const GameOverScreen = ({ numOfRounds, restartGame, userNum }) => {
	return (
		<ScrollView>
			<View style={styles.screen}>
				<Text style={defaultStyles.titleText}>Game Over</Text>
				<View style={styles.imageHolder}>
					<Image
						source={require('../assets/success.png')}
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
		</ScrollView>
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
		width: Dimensions.get('window').width * 0.6,
		height: Dimensions.get('window').width * 0.6,
		borderRadius: (Dimensions.get('window').width * 0.6) / 2,
		overflow: 'hidden',
		borderWidth: Dimensions.get('window').height > 600 ? 5 : 2,
		marginVertical: Dimensions.get('window').height / 20,
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
