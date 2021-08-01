import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import colors from '../constants/colors';
import defaultStyles from '../constants/default-styles';

const StartGameScreen = ({ startGame }) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState();

	const confirmHandler = () => {
		const chosen = +enteredValue;
		if (isNaN(chosen) || chosen <= 0 || chosen >= 99) {
			Alert.alert(
				'Invalid input',
				'Please enter a number between 1 and 99',
				[
					{
						text: 'Cancel',
					},
					{
						text: 'Okay',
						style: 'destructive',
						onPress: () => setEnteredValue(''),
					},
				],
				{
					cancelable: true,
				}
			);
			return;
		}
		setConfirmed(true);
		setSelectedNumber(chosen);
		setEnteredValue('');
		Keyboard.dismiss();
	};

	const resetHandler = () => {
		setEnteredValue('');
		setSelectedNumber();
		setConfirmed(false);
		Keyboard.dismiss();
	};

	let confirmedOut;
	if (confirmed) {
		confirmedOut = (
			<Card style={styles.numberContainer}>
				<Text>You selected</Text>
				<NumberContainer>{selectedNumber}</NumberContainer>
				{/* <Button title='START GAME' onPress={() => startGame(selectedNumber)} /> */}
				<MainButton onPress={() => startGame(selectedNumber)}>
					START GAME
				</MainButton>
			</Card>
		);
	}

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.screen}>
				<Text style={{ ...styles.title, ...defaultStyles.titleText }}>
					Start a new Game
				</Text>
				<Card style={styles.card}>
					<Text>Select a number</Text>
					<Input
						style={styles.input}
						keyboardType='number-pad'
						maxLength={2}
						onChangeText={(value) =>
							setEnteredValue(value.replace(/[^0-9]/g, ''))
						}
						value={enteredValue}
					/>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button
								title='Reset'
								color={colors.primary}
								onPress={resetHandler}
							/>
						</View>
						<View style={styles.button}>
							<Button
								title='Confirm'
								color={colors.secondary}
								onPress={confirmHandler}
							/>
						</View>
					</View>
				</Card>
				{confirmedOut}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,

		padding: 10,
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	card: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
	},
	button: {
		width: '40%',
	},
	input: {
		width: 50,
		textAlign: 'center',
	},
	numberContainer: {
		marginTop: 20,
		alignItems: 'center',
	},
});

export default StartGameScreen;
