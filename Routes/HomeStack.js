import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Header from '../Shared/Header';
import WineInfo from '../Screens/WineInfo'

const Stack = createNativeStackNavigator();

HomeStack = () => {
console.log("HomeStack.js 45");
	return (
		<Stack.Navigator initalRouteName="Home">
			<Stack.Screen 
				name="Home" 
				component={Home} 
				screenOptions={{
					title: 'Home',
					headerTitle: () => <Header />,
					headerStyle: {
						height: 150,
						backgroundColor: 'White'
					}
				}}
			/>
			<Stack.Screen 
				name="WineInfo" 
				component={WineInfo} 
				screenOptions={{
					title: 'Wine Info',
					headerTitle: () => <Header />,
					headerStyle: {
						height: 150,
						backgroundColor: 'White'
					},
      		headerTintColor: '#023F77'
				}}
			/>
		</Stack.Navigator>
	);
}

export default HomeStack
