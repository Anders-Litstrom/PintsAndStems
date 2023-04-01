import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WineQuestion5 from './../../Screens/Wine/WineQuestion5'
import Header from '../../Shared/Header';
/*
const screens = {
  WineQuestion5: {
    screen: WineQuestion5,
    navigationOptions: {
      headerTitle: () => <Header />
    }
  }
}
*/
const Stack = createNativeStackNavigator();
const WineQuestion5Stack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="WineQuestion5"
				component={WineQuestion5}
				screenOptions={{
					headerTitle: () => <Header />
				}}
			/>
		</Stack.Navigator>
	)
}

export default WineQuestion5Stack;
