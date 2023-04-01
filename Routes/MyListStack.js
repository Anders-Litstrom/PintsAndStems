import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyList from '../Screens/MyList'
import Header from '../Shared/Header';
/*
const screens = {
  MyList: {
    screen: MyList,
    navigationOptions: ({navigation}) => {
      return {
        title: 'My List',
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

const MyListStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen 
				name="MyList"
				component={MyList}
				screenOptions={{
					title: 'My List',
					headerTitle: () => <Header />,
					headerStyle: {
						height: 150,
						backgroundColor: 'White',
					}
				}}
			/>
		</Stack.Navigator>
	);
}

export default MyListStack;
