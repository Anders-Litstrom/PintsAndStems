import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WineIntro from './../../Screens/Wine/WineIntro';
import WineQuestion1 from './../../Screens/Wine/WineQuestion1';
import WineQuestion2 from './../../Screens/Wine/WineQuestion2';
import WineQuestion3 from './../../Screens/Wine/WineQuestion3';
import WineQuestion4 from './../../Screens/Wine/WineQuestion4';
import WineQuestion5 from './../../Screens/Wine/WineQuestion5';
import WineQuestion6 from './../../Screens/Wine/WineQuestion6';
import WineResults from './../../Screens/Wine/WineResults';
import Header from '../../Shared/Header';

const Stack = createNativeStackNavigator();

const WineIntroStack = () => {
	<Stack.Navigator>
		<Stack.Screen 
			name="WineIntro"
			componenent={WineIntro}
			screenOptions={{
				title: "Wine Intro",
				headerTitle: () => <Header />,
				headerStyle: {
					height: 150,
					backgroundColor: "White"
				}
			}}
		/>
		<Stack.Screen 
			name="WineQuestion1"
			componenent={WineQuestion1}
			screenOptions={{
				title: "Wine Question 1",
				headerTitle: () => <Header />,
				headerStyle: {
					height: 150,
					backgroundColor: "White"
				}
			}}
		/>
		<Stack.Screen 
			name="WineQuestion2"
			componenent={WineQuestion2}
			screenOptions={{
				title: "Wine Question 2",
				headerTitle: () => <Header />,
				headerStyle: {
					height: 150,
					backgroundColor: "White"
				}
			}}
		/>
		<Stack.Screen 
			name="WineQuestion3"
			componenent={WineQuestion3}
			screenOptions={{
				title: "Wine Question 3",
				headerTitle: () => <Header />,
				headerStyle: {
					height: 150,
					backgroundColor: "White"
				}
			}}
		/>
		<Stack.Screen 
			name="WineQuestion4"
			componenent={WineQuestion4}
			screenOptions={{
				title: "Wine Question4",
				headerTitle: () => <Header />,
				headerStyle: {
					height: 150,
					backgroundColor: "White"
				}
			}}
		/>
		<Stack.Screen 
			name="WineQuestion5"
			componenent={WineQuestion5}
			screenOptions={{
				title: "Wine Question 5",
				headerTitle: () => <Header />,
				headerStyle: {
					height: 150,
					backgroundColor: "White"
				}
			}}
		/>
		<Stack.Screen 
			name="WineQuestion6"
			componenent={WineQuestion6}
			screenOptions={{
				title: "Wine Question 6",
				headerTitle: () => <Header />,
				headerStyle: {
					height: 150,
					backgroundColor: "White"
				}
			}}
		/>
		<Stack.Screen 
			name="WineResults"
			componenent={WineResults}
			screenOptions={{
				title: "Wine Results",
				headerTitle: () => <Header />,
				headerStyle: {
					height: 150,
					backgroundColor: "White"
				}
			}}
		/>
	</Stack.Navigator>
}

export default WineIntroStack;
