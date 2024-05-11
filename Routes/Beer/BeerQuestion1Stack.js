import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BeerQuestion1 from './../../Screens/Beer/BeerQuestion1'
import Header from '../../Shared/Header';

const Stack = createNativeStackNavigator();

const BeerQuestion1Stack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="BeerQuestion1"
				component={BeerQuestion1}
				screenOptions={{
					headerTitle: () => <Header />,
					headerStyle: {
						height:150,
						backgroundColor: 'White'
					}
				}}
			/>
		</Stack.Navigator>
	)
}

export default BeerQuestion1Stack;
