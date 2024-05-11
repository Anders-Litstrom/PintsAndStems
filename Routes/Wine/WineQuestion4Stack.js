import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WineQuestion4 from './../../Screens/Wine/WineQuestion4'
import Header from '../../Shared/Header';

const Stack = createNativeStackNavigator();

const WineQuestion4Stack = () => {
	<Stack.Navigator>
		<Stack.Screen
			name="WineQuestion4"
			component={WineQuestion4}
			screenOptions={{
				headerTitle: () => <Header />
			}}
		/>
	</Stack.Navigator>
}

export default WineQuestion4Stack;
