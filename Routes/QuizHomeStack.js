import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuizHome from '../Screens/QuizHome';
import Header from '../Shared/Header';

import WineIntro from './../Screens/Wine/WineIntro';
import WineQuestion1 from './../Screens/Wine/WineQuestion1';
import WineQuestion2 from './../Screens/Wine/WineQuestion2';
import WineQuestion3 from './../Screens/Wine/WineQuestion3';
import WineQuestion4 from './../Screens/Wine/WineQuestion4';
import WineQuestion5 from './../Screens/Wine/WineQuestion5';
import WineQuestion6 from './../Screens/Wine/WineQuestion6';
import WineResults from './../Screens/Wine/WineResults';

import BeerIntro from './../Screens/Beer/BeerIntro';
import BeerQuestion1 from './../Screens/Beer/BeerQuestion1';
import BeerQuestion2 from './../Screens/Beer/BeerQuestion2';
import BeerQuestion3 from './../Screens/Beer/BeerQuestion3';
import BeerQuestion4 from './../Screens/Beer/BeerQuestion4';
import BeerQuestion5 from './../Screens/Beer/BeerQuestion5';
import BeerQuestion6 from './../Screens/Beer/BeerQuestion6';
import BeerResults from './../Screens/Beer/BeerResults';

const Stack = createNativeStackNavigator();
const QuizHomeStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="QuizHome"
				component={QuizHome}
				screenOptions={{
					title: "Tasting Quiz",
					headerTitle: () => <Header />,
					headerStyle: {
						height: 150,
						backgroundColor: 'White'
					}
				}}
			/>
			<Stack.Group>
				<Stack.Screen name="WineIntro" component={WineIntro} options={{ headerShown: false }} />
				<Stack.Screen name="WineQuestion1" component={WineQuestion1} options={{ headerShown: false }} />
				<Stack.Screen name="WineQuestion2" component={WineQuestion2} options={{ headerShown: false }} />
				<Stack.Screen name="WineQuestion3" component={WineQuestion3} options={{ headerShown: false }} />
				<Stack.Screen name="WineQuestion4" component={WineQuestion4} options={{ headerShown: false }} />
				<Stack.Screen name="WineQuestion5" component={WineQuestion5} options={{ headerShown: false }} />
				<Stack.Screen name="WineQuestion6" component={WineQuestion6} options={{ headerShown: false }} />
				<Stack.Screen name="WineResults" component={WineResults} options={{ headerShown: false }} />
			</Stack.Group>
			<Stack.Group>
				<Stack.Screen name="BeerIntro" component={BeerIntro} options={{ headerShown: false }} />
				<Stack.Screen name="BeerQuestion1" component={BeerQuestion1} options={{ headerShown: false }} />
				<Stack.Screen name="BeerQuestion2" component={BeerQuestion2} options={{ headerShown: false }} />
				<Stack.Screen name="BeerQuestion3" component={BeerQuestion3} options={{ headerShown: false }} />
				<Stack.Screen name="BeerQuestion4" component={BeerQuestion4} options={{ headerShown: false }} />
				<Stack.Screen name="BeerQuestion5" component={BeerQuestion5} options={{ headerShown: false }} />
				<Stack.Screen name="BeerQuestion6" component={BeerQuestion6} options={{ headerShown: false }} />
				<Stack.Screen name="BeerResults" component={BeerResults} options={{ headerShown: false }} />
			</Stack.Group>
		</Stack.Navigator>
	);
}

export default QuizHomeStack;
