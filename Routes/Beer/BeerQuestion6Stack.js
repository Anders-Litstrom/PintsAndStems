import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BeerQuestion6 from './../../Screens/Beer/BeerQuestion6'
import Header from '../../Shared/Header';

const Stack = createNativeStackNavigator();

const BeerQuestion6Stack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="BeerQuestion6"
				component={BeerQuestion6}
				screenOptions={{
					headerTitle: () => <Header />
				}}
			/>
		</Stack.Navigator>
	);
}

export default BeerQuestion6Stack;
