import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { Realm, useApp } from '@realm/react'
import {AuthContext} from '../../Shared/StateManagement'

export const LogIn = () => {

	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const initialState = {
		isSubmitting: false,
		errorMessage: null
	};

	const {auth, setAuth} = React.useContext(AuthContext);

	const client = useApp();

	const [localState, setLocalState] = React.useState(initialState);

	const _handleLogInPress = async (event) => {
		event.preventDefault();
		setLocalState({
			...localState,
			isSubmitting: true,
			errorMessage: null
		});
		const credentials = Realm.Credentials.emailPassword(
			email,
			password
		);
		try {
			const user = await client.logIn(credentials);
			console.log("Successfully logged in!", user.id);
		
			setLocalState({
				...localState,
				isSubmitting: false
			});
			
			setAuth({
				...auth,
				user: user
			});

			return user;
		} catch (err) {
			setLocalState({
				...localState,
				isSubmitting: false,
				errorMessage: err.message || err.statusText
			});
		}
	};

	return (
		<View className="login-container" style={styles.background}>
			<View className="card">
				<View className="container">

					<Text style={styles.inputTitle}>Email Address</Text>
					<View style={styles.inputField}>	
						<TextInput
							type="text"
							value={localState.email}
							onChangeText={text => setEmail(text)}
							name="email"
							id="email"
							accessibilityLabel="email"
						/>
					</View>

					<Text style={styles.inputTitle}>Password</Text>
					<View style={styles.inputField}>
						<TextInput
							type="text"
							value={localState.password}
							onChangeText={text => setPassword(text)}
							name="password"
							id="password"
							accessibilityLabel="password"
							secureTextEntry={true}
						/>
					</View>

					{localState.errorMessage && (
						<View className="form-error"><Text>{localState.errorMessage}</Text></View>
					)}

					<TouchableOpacity 
						style={styles.button}
						disabled={localState.isSubmitting}
						title="Login"
						onPress={_handleLogInPress}
					>
						{localState.isSubmitting ? (
							<Text style={styles.buttonText}>Loading...</Text>
						) : (
							<Text style={styles.buttonText}>Log in</Text>
						)}
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    marginHorizontal: '10%',
    marginVertical: '4%',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
    textShadowColor: '#023F77'
	},
  button: {
    backgroundColor: '#f68d6e',
    height: 45,
    width: '60%',
    alignSelf: 'center',
    marginVertical: '5%',
    marginBottom: '5%',
  },
	inputField: {
		borderStyle: 'solid',
		borderWidth: 2,
		borderRadius: 5,
		backgroundColor: 'white',
	},
	background:{
		flex: 1,
		backgroundColor: '#023F77'
	},
	inputTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
	}
});

export default LogIn
