import React from 'react';
import { Realm, useApp } from '@realm/react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import {AuthContext} from '../../Shared/StateManagement';

const SignUp = () => {

	const {auth, setAuth} = React.useContext(AuthContext);

	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const initialState = {
		confirmationSent: false,
		errorMessage: null
	};

	const client = useApp();

	const [localState, setLocalState] = React.useState(initialState);
	
	const _handleSignupPress = async (event) => {
		event.preventDefault();
		setLocalState({
			...localState,
			isSubmitting: true,
			errorMessage: null
		});

		try {
			await client.emailPasswordAuth.registerUser({
							email: email,
							password: password
			});
			setLocalState({
				...localState,
				confirmationSent: true
			});
		} catch (err) {
			setLocalState({
				...localState,
				errorMessage: err.message || err.statusText
			});
		}
	};

	return (
		<View className="signup-container" style={styles.background}>
			<View className="card">
				<View className="container">
						
						<Text style={styles.inputTitle}>Email Address</Text>
						<View style={styles.inputField}>
							<TextInput
								type="text"
								value={email}
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
								value={password}
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

					{localState.confirmationSent && (
						<Text>"Didn't get the email?"</Text>
					)}

					<TouchableOpacity
						title="SignUp"
						onPress={_handleSignupPress}
						style={styles.button}
					>
						{localState.confirmationSent ? (
							<Text style={styles.buttonText}>Resend Email</Text>
						) : (
							<Text style={styles.buttonText}>Sign up</Text>
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
  wineCardTitle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: '7%',
    top: '-12%'
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

export default SignUp;
