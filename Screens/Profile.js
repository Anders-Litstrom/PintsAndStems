import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { Realm, useApp } from '@realm/react';
import {AuthContext} from '../Shared/StateManagement'

const APP_ID = 'pintsandstems-iuaox';

const Profile = ({ navigation }) => {
	const {auth, setAuth} = React.useContext(AuthContext);
  
	const initialState = {
		loginPressed: false,
		signUpPressed: false
	}

	const client = useApp();

	const [state, setState] = React.useState(initialState);

	let loginStatus = "Currently logged out."

	if(auth.isAuthenticated) {
		loginStatus = `Currently logged in as ${state.user}!`
	}

	const LoginButtons = (props) => {
		return(
			<React.Fragment>
			<Button
				onPress={props.onPressLogin}
				title="Login"
			/>
			<Button
				onPress={props.onPressSignup}
				title="Signup"
			/>
			</React.Fragment>
		);
	}

	const LogoutButton = (props) => {
		return(
			<Button
				onPress={props.onPress}
				title="Logout"/>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.welcomeTextContainer}>
				<Text style={styles.headerWelcomeText}>My Profile</Text>
			</View>
			<Text style={styles.wineCardDescription}> {loginStatus} </Text>
			{auth.isAuthenticated ? <LogoutButton onPress={_onPressLogout} /> 
				: <LoginButtons onPressLogin={_onPressLogin} onPressSignup={_onPressSignup} />}
		</View>
	);

  const _onPressLogin = () => {
		navigation.navigate('LogIn');
  }

	const _onPressSignup = () => {
		navigation.navigate('SignUp');
	}

  const _onPressLogout = () => {
    client.currentUser.logOut().then(user => {
        console.log(`Successfully logged out`);
        this.setState({ currentUserId: undefined })
    }).catch(err => {
        console.log(`Failed to log out: ${err}`);
        this.setState({ currentUserId: undefined })
    });
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#023F77',
  },
  welcomeTextContainer: {
    backgroundColor: 'white',
  },
  headerWelcomeText: {
    color: '#f68d6e',
    fontSize: 55,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginHorizontal: '7%',
    marginBottom: '7%'
  },
  wineCardDescription: {
    backgroundColor: '#f68d6e',
    alignSelf: 'center',
    color: 'white',
    fontSize: 14,
    marginHorizontal: '10%',
    marginTop: '3%',
    marginBottom: '10%'
  },
});

export default Profile
