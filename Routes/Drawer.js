import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeStack from './HomeStack';
import MyListStack from './MyListStack';
import ProfileStack from './ProfileStack';
import WineIntroStack from './Wine/WineIntroStack';
import BeerIntroStack from './Beer/BeerIntroStack';
import QuizHomeStack from './QuizHomeStack';
import LogInStack from './Account/LogInStack';
import SignUpStack from './Account/SignUpStack';

import Home from '../Screens/Home';
import WineInfo from '../Screens/WineInfo';
/*
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack
  },
  'My List': {
    screen: MyListStack
  },
  'My Profile': {
    screen: ProfileStack
  },
  WineIntroStack: {
    screen: WineIntroStack
  },
  BeerIntroStack: {
    screen: BeerIntroStack
  },
  Quiz: {
    screen: QuizHomeStack,
  },
	LogIn: {
		screen: LogInStack
	},
	SignUp: {
		screen: SignUpStack
	}
});

export default createAppContainer(RootDrawerNavigator);
*/

	const Drawer = createDrawerNavigator();
function RootDrawerNavigator() {
	<Drawer.Navigator initialRouteName="Home">
		<Drawer.Screen name="HomeStack" component={HomeStack} />
	</Drawer.Navigator>
}

export default RootDrawerNavigator;
