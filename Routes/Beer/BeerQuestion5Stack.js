import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BeerQuestion5 from './../../Screens/Beer/BeerQuestion5'
import Header from '../../Shared/Header';

const Stack = createNativeStackNavigator();

const BeerQuestion5Stack = () => {
	<Stack.Navigator>
		<Stack.Screen
			name="BeerQuestion5"
			component={BeerQuestion5}
			screenOptions={{
				headerTitle: () => <Header />
			}}
		/>
	</Stack.Navigator>
}

export default BeerQuestion5Stack;
