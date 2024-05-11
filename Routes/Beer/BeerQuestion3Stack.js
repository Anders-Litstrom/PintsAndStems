import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BeerQuestion3 from './../../Screens/Beer/BeerQuestion3'
import Header from '../../Shared/Header';

const Stack = createNativeStackNavigator();

const BeerQuestion3Stack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="BeerQuestion3"
				component={BeerQuestion3}
				screenOptions={{
					headerTitle: () => <Header />
				}}
			/>
		</Stack.Navigator>
	);
}

export default BeerQuestion3Stack;
