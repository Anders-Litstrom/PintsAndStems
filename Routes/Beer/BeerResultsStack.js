import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/stack';
import BeerResults from './../../Screens/Beer/BeerResults'
import Header from '../../Shared/Header';
/*
const screens = {
  BeerResults: {
    screen: BeerResults,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation}/>,
      }
    }
  }
}
*/
const Stack = createNativeStackNavigator();

const BeerResultsStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen 
				name="BeerResults"
				component={BeerResults}
				screenOptions={{
					headerTitle: () => <Header />
				}}	
			/>
		</Stack.Navigator>
	)
}

export default BeerResultsStack;
