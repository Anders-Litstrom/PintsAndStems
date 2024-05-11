import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import {RootDrawerNavigator} from './Routes/Drawer'
import Realm from 'realm';
import { AppProvider, UserProvider } from '@realm/react'
import { BevContextProvider, AuthContextProvider, appId } from './Shared/StateManagement'
import {createDrawerNavigator} from '@react-navigation/drawer';
import { ErrorBoundary } from 'react-error-boundary';

import HomeStack from './Routes/HomeStack'
import MyListStack from './Routes/MyListStack';
import ProfileStack from './Routes/ProfileStack';
import WineIntroStack from './Routes/Wine/WineIntroStack';
import BeerIntroStack from './Routes/Beer/BeerIntroStack';
import QuizHomeStack from './Routes/QuizHomeStack';
import LogInStack from './Routes/Account/LogInStack';
import SignUpStack from './Routes/Account/SignUpStack';

import Home from './Screens/Home';

const App = () => {
	const Drawer = createDrawerNavigator();

  return (
	<NavigationContainer>
		<AppProvider id={appId} >
		<AuthContextProvider>
		<BevContextProvider>
			<Drawer.Navigator>
				<Drawer.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
				<Drawer.Screen name="My List" component={MyListStack} options={{ headerShown: false }} />
				<Drawer.Screen name="Profile" component={ProfileStack} options={{ headerShown: false }} />
				<Drawer.Screen name="Quiz Home" component={QuizHomeStack} options={{ headerShown: false }} />
			</Drawer.Navigator>
		</BevContextProvider>
		</AuthContextProvider>
			</AppProvider>
	</NavigationContainer>
  );
	
};

export default App;
