import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import defaultStyles from '../constants/default-styles';

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
	const [currentGuess, setCurrentGuess] = useState(
		generateRandomNumBtw(1, 100, userChoice)
	);
	const [rounds, setRounds] = useState(0);
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
			currentLow.current = currentGuess;
		}

		const nextNumber = generateRandomNumBtw(
			currentLow.current,
			currentHigh.current,
			currentGuess
		);
		setCurrentGuess(nextNumber);
		setRounds((current) => current + 1);
	};

	useEffect(() => {
		if (userChoice === currentGuess) {
			onGameOver(rounds);
		}
	}, [userChoice, currentGuess, onGameOver]);

	return (
		<View style={styles.screen}>
			<Text style={defaultStyles.titleText}>Opponent's Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.card}>
				<Button title='LOWER' onPress={() => nextGuessHandler('lower')} />
				<Button title='HIGHER' onPress={() => nextGuessHandler('greater')} />
			</Card>
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
});
export default GameScreen;
