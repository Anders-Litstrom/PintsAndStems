import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { Realm, useApp } from '@realm/react';
import {AuthContext} from '../Shared/StateManagement'

const APP_ID = 'pintsandstems-iuaox';

			/*
export const Profile = () => {
	const {dispatch} = React.useContext(AuthContext);
	const initialState = {
		email: "",
		password: "",
		isSubmitting: false,
		errorMessage: null
	};

	const [data, setData] = React.useState(initialState);
	const handleInputChange = event => {
		setData({
			...data,
			[event.target.name]: event.target.value
		});
	};
	const handleFormSubmit = event => {
		event.preventDefault();
		setData({
			...data,
			isSubmitting: true,
			errorMessage: null
		});
		// TODO: login request
	/*		 
		.then(res => {
			if (res.ok) {
				return res.json();
			}
			throw res;
		})
		.then(resJson => {
			dispatch({
				type: "LOGIN",
				payload: resJson
			})
		})
		.catch(error => {
			setData({
				...data,
				isSubmitting: false,
				errorMessage: error.message || error.statusText
			});
		})
	}
    return (
      <div style={styles.container}>
        <div style={styles.welcomeTextContainer}>
          <h1 style={styles.headerWelcomeText}>My Profile</h1>
        </div>
				<form onSubmit={handleFormSubmit}>
					<h1>Login</h1>

					<label htmlFor="email">
						Email Address
						<input
							type="text"
							value={data.email}
							onChange={handleInputChange}
							name="email"
							id="email"
						/>
					</label>

					<label htmlFor="password">
						Password
						<input
							type="text"
							value={data.password}
							onChange={handleInputChange}
							name="password"
							id="password"
						/>
					</label>
					<button disabled={data.isSubmitting}>
						{data.isSubmitting ? (
								"Loading..."
							) : (
								"Login"
							)}
					</button>
				</form>
      </div>
 );
        <Text style={styles.wineCardDescription}> {loginStatus} </Text>
        {this.state.currentUserId !== undefined ? logoutButton : loginButton}
    let loginStatus = "Currently logged out."

    if(this.state.currentUserId) {
      loginStatus = `Currently logged in as ${this.state.currentUserId}!`
    }

    loginButton = <Button
                    onPress={this._onPressLogin}
                    title="Login"/>

    logoutButton = <Button
                    onPress={this._onPressLogout}
                    title="Logout"/>


  _loadClient() {
		const client = new Realm.App(APP_ID);
    this.setState({ client });
					
    if(client.currentUser) {
      this.setState({ currentUserId: client.currentUser.id })
    }
  }

  _onPressLogin() {
    this.state.client.logIn(Realm.Credentials.emailPassword(data.email, data.password))
			.then(user => {
        console.log(`Successfully logged in as user ${user.id}`);
        this.setState({ currentUserId: user.id })
    }).catch(err => {
        console.log(`Failed to log in anonymously: ${err}`);
        this.setState({ currentUserId: undefined })
    });
  }

  _onPressLogout() {
    this.state.client.currentUser.logOut().then(user => {
        console.log(`Successfully logged out`);
        this.setState({ currentUserId: undefined })
    }).catch(err => {
        console.log(`Failed to log out: ${err}`);
        this.setState({ currentUserId: undefined })
    });
  }
}
*/

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
