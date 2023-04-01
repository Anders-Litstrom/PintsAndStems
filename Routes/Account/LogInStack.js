import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../../Screens/Account/LogIn';
import Header from '../../Shared/Header';
/*
const screens = {
  LogIn: {
    screen: LogIn,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Login',
        headerTitle: () => <Header navigation={navigation}/>,
        headerStyle: {
          height: 150,
          backgroundColor: 'White',
        }
      }
    }
	}
}
*/
const Stack = createNativeStackNavigator();

const LogInStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="LogIn"
				component={LogIn}
				screenOptions={{
					title: 'Login',
					headerTitle: () => <Header />,
					headerStyle: {
						height: 150,
						backgroundColor: 'White'
					}
				}}
			/>
		</Stack.Navigator>
	);
}

export default LogInStack;
