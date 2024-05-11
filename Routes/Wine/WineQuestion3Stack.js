import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WineQuestion3 from './../../Screens/Wine/WineQuestion3'
import Header from '../../Shared/Header';

const Stack = createNativeStackNavigator();

const WineQuestion1Stack = () => {
	<Stack.Navigator>
		<Stack.Screen
			name="WineQuestion1"
			component={WineQuestion1}
			screenOptions={{
				headerTitle: () => <Header />
			}}
		/>
	</Stack.Navigator>
}

export default WineQuestion3Stack;
