import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WineQuestion1 from './../../Screens/Wine/WineQuestion1'
import Header from '../../Shared/Header';
/*
const screens = {
  WineQuestion1: {
    screen: WineQuestion1,
    navigationOptions: {
      headerTitle: () => <Header />
    }
  }
}
*/
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

export default WineQuestion1Stack;
