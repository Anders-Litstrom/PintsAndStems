import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WineQuestion2 from './../../Screens/Wine/WineQuestion2'
import Header from '../../Shared/Header';
/*
const screens = {
  WineQuestion2: {
    screen: WineQuestion2,
    navigationOptions: {
      headerTitle: () => <Header />
    }
  }
}

const WineQuestion2Stack = createStackNavigator(screens);

export default WineQuestion2Stack;
*/
const Stack = createNativeStackNavigator();

const WineQuestion2Stack = () => {
	<Stack.Navigator>
		<Stack.Screen
			name="WineQuestion2"
			component={WineQuestion2}
			screenOptions={{
				headerTitle: () => <Header />
			}}
		/>
	</Stack.Navigator>
}

export default WineQuestion2Stack;
