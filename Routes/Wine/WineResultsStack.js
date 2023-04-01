import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WineResults from './../../Screens/Wine/WineResults'
import Header from '../../Shared/Header';
/*
const screens = {
  WineResults: {
    screen: WineResults,
    navigationOptions: {
      headerTitle: () => <Header />
    }
  }
}
*/
const Stack = createNativeStackNavigator();

const WineResultsStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="WineResults:
				component={WineResults}
				screenOptions={{
					headerTitle: () => <Header />
				}}
			/>
		</Stack.Navigator>
	);
}

export default WineResultsStack;
