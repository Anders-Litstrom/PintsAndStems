import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BeerQuestion4 from './../../Screens/Beer/BeerQuestion4'
import Header from '../../Shared/Header';

const Stack = createNativeStackNavigator();

const BeerQuestion4Stack = () => {
	return (
		<Stack.Navigation>
			<Stack.Screen
				name="BeerQuestion4"
				component={BeerQuestion4}
				screenOptions={{
					headerTitle: () => <Header />
				}}
			/>
		</Stack.Navigation>
	);
}

export default BeerQuestion4Stack;
