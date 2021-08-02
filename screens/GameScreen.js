import React, { useState, useRef, useEffect } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Button,
	Alert,
	ScrollView,
	FlatList,
} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import defaultStyles from '../constants/default-styles';
import MainButton from '../components/MainButton';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

const generateRandomNumBtw = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const randomNum = Math.floor(Math.random() * (max - min)) + min;
	if (randomNum === exclude) {
		return generateRandomNumBtw(min, max, exclude);
	}
	return randomNum;
};

const GameScreen = ({ userChoice, onGameOver }) => {
	const initialGuess = generateRandomNumBtw(1, 100, userChoice).toString();
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [pastGuesses, setPastGuesses] = useState([initialGuess]);
	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	const nextGuessHandler = (direction) => {
		if (
			(direction === 'lower' && currentGuess < userChoice) ||
			(direction === 'greater' && currentGuess > userChoice)
		) {
			Alert.alert('Wrong choice', 'You know this is wrong 😁', [
				{ text: 'Sorry', style: 'cancel' },
			]);
			return;
		}

		if (direction === 'lower') {
			currentHigh.current = currentGuess;
		}
		if (direction === 'greater') {
			currentLow.current = currentGuess + 1;
		}

		const nextNumber = generateRandomNumBtw(
			currentLow.current,
			currentHigh.current,
			currentGuess
		);
		setCurrentGuess(nextNumber);
		setPastGuesses((current) => [nextNumber.toString(), ...current]);
	};

	useEffect(() => {
		if (userChoice === currentGuess) {
			onGameOver(pastGuesses.length);
		}
	}, [userChoice, currentGuess, onGameOver]);

	return (
		<View style={styles.screen}>
			<Text style={defaultStyles.titleText}>Opponent's Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.card}>
				<MainButton onPress={() => nextGuessHandler('lower')}>
					<Ionicons name='md-remove' size={24} color='white' />
				</MainButton>
				<MainButton onPress={() => nextGuessHandler('greater')}>
					<Ionicons name='md-add' size={24} color='white' />
				</MainButton>
			</Card>
			{/* <ScrollView style={styles.list}>
				{pastGuesses.map((guess, numOfRounds) => (
					<View key={guess} style={styles.listItem}>
						<Text style={defaultStyles.bodyText}>
							# {pastGuesses.length - numOfRounds} :{' '}
						</Text>
						<Text style={{ ...defaultStyles.bodyText, color: colors.primary }}>
							{guess}
						</Text>
					</View>
				))}
			</ScrollView> */}
			<FlatList
				style={styles.list}
				data={pastGuesses}
				keyExtractor={(item) => item}
				renderItem={({ item, index }) => (
					<View key={item} style={styles.listItem}>
						<Text style={defaultStyles.bodyText}>
							# {pastGuesses.length - index} :{' '}
						</Text>
						<Text style={{ ...defaultStyles.bodyText, color: colors.primary }}>
							{item}
						</Text>
					</View>
				)}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	card: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-around',
		marginTop: 20,
		width: 300,
		maxWidth: '80%',
	},
	list: { margin: 20, width: '80%', flex: 1 },
	listItem: {
		padding: 10,
		margin: 15,
		borderColor: 'black',
		borderWidth: 2,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
});
export default GameScreen;
