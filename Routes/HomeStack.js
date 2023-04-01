import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Header from '../Shared/Header';
import WineInfo from '../Screens/WineInfo'
/*
const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Home',
        headerTitle: () => <Header navigation={navigation}/>,
        headerStyle: {
          height: 150,
          backgroundColor: 'White',
        }
      }
    }
},
  WineInfo: {
    screen: WineInfo,
    navigationOptions: {
      title: 'Wine Info',
      headerTitle: () => <Header />,
      headerStyle: {
        height: 150,
        backgroundColor: 'White',
      },
      headerTintColor: '#023F77',

    }
  },

}

const HomeStack = createStackNavigator(screens);

export default HomeStack;
*/

const Stack = createNativeStackNavigator();

HomeStack = () => {
	return (
		<Stack.Navigator>
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
