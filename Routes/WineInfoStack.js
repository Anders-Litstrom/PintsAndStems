import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createAppContainer} from '@react-navigation/native';
import WineInfo from '../Screens/WineInfo'
import Header from '../Shared/Header';

const Stack = createNativeStackNavigator();

const WineInfoStack = () => {
	<Stack.Navigator>
		<Stack.Screen
			name="WineInfo"
			component={WineInfo}
			screenOptions={{
				title: 'Wine Info',
				headerTitle: () => <Header />,
				headerStyle: {
					height: 150,
					backgroundColor: 'White'
				}
			}}
		/>
	</Stack.Navigator>
}

export default WineInfoStack;
