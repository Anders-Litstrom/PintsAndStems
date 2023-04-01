import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../../Screens/Account/SignUp';
import Header from '../../Shared/Header';
/*
const screens = {
  SignUp: {
    screen: SignUp,
    navigationOptions: ({navigation}) => {
      return {
        title: 'SignUp',
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

const SignUpStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="SignUp"
				component={SignUp}
				screenOptions={{
					title: 'Sign Up',
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

export default SignUpStack;
