import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BeerQuestion2 from './../../Screens/Beer/BeerQuestion2'
import Header from '../../Shared/Header';

const Stack = createNativeStackNavigator();

const BeerQuestion2Stack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="BeerQuestion2"
				component={BeerQuestion2}
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

export default BeerQuestion2Stack;
