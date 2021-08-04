import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
		'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
	});
};

export default function App() {
	const [selectedNumber, setSelectedNumber] = useState();
	const [numOfRounds, setNumOfRounds] = useState(0);
	const [dataLoaded, setDataLoaded] = useState(false);

	if (!dataLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setDataLoaded(true)}
				onError={(err) => console.log(err)}
			/>
		);
	}

	const startGameHandler = (number) => {
		setSelectedNumber(number);
		setNumOfRounds(0);
	};
	const gameOverHandler = (number) => {
		setNumOfRounds(number);
	};

	let content = <StartGameScreen startGame={startGameHandler} />;

	if (selectedNumber && numOfRounds <= 0) {
		content = (
			<GameScreen onGameOver={gameOverHandler} userChoice={selectedNumber} />
		);
	} else if (numOfRounds > 0) {
		content = (
			<GameOverScreen
				numOfRounds={numOfRounds}
				restartGame={() => startGameHandler(0)}
				userNum={selectedNumber}
			/>
		);
	}

	return (
		<SafeAreaView style={styles.screen}>
			<Header title='Guess a number' />
			{content}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: { flex: 1 },
});
