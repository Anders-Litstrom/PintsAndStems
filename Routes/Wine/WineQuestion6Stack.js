import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WineQuestion6 from './../../Screens/Wine/WineQuestion6'
import Header from '../../Shared/Header';

const Stack = createNativeStackNavigator();

const WineQuestion6Stack = () => {
	<Stack.Navigator>
		<Stack.Screen
			name="WineQuestion6"
			component={WineQuestion6}
			screenOptions={{
				headerTitle: () => <Header />
			}}
		/>
	</Stack.Navigator
}

export default WineQuestion6Stack;
