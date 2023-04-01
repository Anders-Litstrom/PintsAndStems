import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../Screens/Profile'
import Header from '../Shared/Header';
/*
const screens = {
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => {
      return {
        title: 'My Profile',
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

const ProfileStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Profile"
				component={Profile}
				screenOptions={{
					title: 'My Profile',
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

export default ProfileStack;
