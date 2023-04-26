import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import RootDrawerNavigator from './Routes/Drawer'
import Realm from 'realm';
import { AppProvider, UserProvider } from '@realm/react'
import { BevContextProvider, AuthContextProvider, appId } from './Shared/StateManagement'
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeStack from './Routes/HomeStack'
import MyListStack from './Routes/MyListStack';
import ProfileStack from './Routes/ProfileStack';
import WineIntroStack from './Routes/Wine/WineIntroStack';
import BeerIntroStack from './Routes/Beer/BeerIntroStack';
import QuizHomeStack from './Routes/QuizHomeStack';
import LogInStack from './Routes/Account/LogInStack';
import SignUpStack from './Routes/Account/SignUpStack';


const App = () => {
	const Drawer = createDrawerNavigator();

  return (
		<NavigationContainer>
			<AppProvider id={appId}>
				<UserProvider>
					<AuthContextProvider>
						<BevContextProvider>
							<Drawer.Navigator>
								<Drawer.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
								<Drawer.Screen name="MyListStack" component={MyListStack} options={{ headerShown: false }} />
								<Drawer.Screen name="ProfileStack" component={ProfileStack} options={{ headerShown: false }} />
								<Drawer.Screen name="WineIntroStack" component={WineIntroStack} options={{ headerShown: false }} />
								<Drawer.Screen name="BeerIntroStack" component={BeerIntroStack} options={{ headerShown: false }} />
								<Drawer.Screen name="QuizHomeStack" component={QuizHomeStack} options={{ headerShown: false }} />
								<Drawer.Screen name="LogInStack" component={LogInStack} options={{ headerShown: false }} />
								<Drawer.Screen name="SignUpStack" component={SignUpStack} options={{ headerShown: false }} />
							</Drawer.Navigator>
						</BevContextProvider>
					</AuthContextProvider>
				</UserProvider>
			</AppProvider>
		</NavigationContainer>
  );
};

export default App;
