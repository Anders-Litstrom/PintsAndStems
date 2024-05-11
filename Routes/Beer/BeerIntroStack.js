import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BeerIntro from './../../Screens/Beer/BeerIntro';
import BeerQuestion1 from './../../Screens/Beer/BeerQuestion1';
import BeerQuestion2 from './../../Screens/Beer/BeerQuestion2';
import BeerQuestion3 from './../../Screens/Beer/BeerQuestion3';
import BeerQuestion4 from './../../Screens/Beer/BeerQuestion4';
import BeerQuestion5 from './../../Screens/Beer/BeerQuestion5';
import BeerQuestion6 from './../../Screens/Beer/BeerQuestion6';
import BeerResults from './../../Screens/Beer/BeerResults';
import Header from '../../Shared/Header';

const Stack = createNativeStackNavigator();

const BeerIntroStack = () => {
	<Stack.Navigator>
		<Stack.Screen 
			name="BeerIntro"
			component={BeerIntro}
			screenOptions={{
				title: "Beer Intro",
				headerTitle: () => <Header />,
				headerStyle: {
					height: 150,
					backgroundColor: 'White'
				}
			}}
		/>
		<Stack.Screen
			name="BeerQuestion1"
			component={BeerQuestion1}
			screenOptions={{
				title: "Beer Question 1",
				headerTitle: () => <Header />,
				headerStyle: {
					height: 150,
					backgroundColor: 'White'
				}
			}}
		/>
		<Stack.Screen
			name="BeerQuestion2"
			component={BeerQuestion2}
			screenOptions={{
				title: "Beer Question 2",
				headerTitle: () => <Header />,
				headerStyle: {
					height: 150,
					backgroundColor: 'White'
				}
			}}
		/>
		<Stack.Screen
			name="BeerQuestion3"
			component={BeerQuestion3}
			screenOptions={{
				title: "Beer Question 3",
				headerTitle: () => <Header />,
				headerStyle: {
					height: 150,
					backgroundColor: 'White'
				}
			}}
		/>
		<Stack.Screen
			name="BeerQuestion4"
			component={BeerQuestion4}
			screenOptions={{
				title: "Beer Question 4",
				headerTitle: () => <Header />,
				headerStyle: {
					height: 150,
					backgroundColor: 'White'
				}
			}}
		/>
		<Stack.Screen
			name="BeerQuestion5"
			component={BeerQuestion5}
			screenOptions={{
				title: "Beer Question 5",
				headerTitle: () => <Header />,
				headerStyle: {
					height: 150,
					backgroundColor: 'White'
				}
			}}
		/>
		<Stack.Screen
			name="Beer Question 6"
			component={BeerQuestion6}
			screenOptions={{
				title: "Beer Question 6",
				headerTitle: () => <Header />,
				headerStyle: {
					height: 150,
					backgroundColor: 'White'
				}
			}}
		/>
		<Stack.Screen
			name="BeerResults"
			component={BeerResults}
			screenOptions={{
				title: "Beer Results",
				headerTitle: () => <Header />,
				headerStyle: {
					height: 150,
					backgroundColor: 'White'
				}
			}}
		/>
	</Stack.Navigator>
}

export default BeerIntroStack;
