import React from 'react';
import { Realm, useApp } from '@realm/react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
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
							email: localState.email,
							password: localState.password
			});
			setLocalState({
				...localState,
				confirmationSent: true
			});
			// TODO: authenticate email
			return user;
		} catch (err) {
			setLocalState({
				...localState,
				errorMessage: err.message || err.statusText
			});
		}
	};

	return (
		<View className="signup-container">
			<View className="card">
				<View className="container">
						
						<Text>Email Address</Text>
						<TextInput
							type="text"
							value={localState.email}
							onChangeText={text => setEmail(text)}
							name="email"
							id="email"
							accessibilityLabel="email"
						/>

						<Text>Password</Text>
						<TextInput
							type="text"
							value={localState.password}
							onChangeText={text => setPassword(text)}
							name="password"
							id="password"
							accessibilityLabel="password"
						/>

					{localState.errorMessage && (
						<span className="form-error">{localState.errorMessage}</span>
					)}

					{localState.confirmationSent && (
						<Text>"Didn't get the email?"</Text>
					)}

					<Button
						title="SignUp"
						onPress={_handleSignupPress}
					>
						{localState.confirmationSent ? (
							<Text>"Resend Email"</Text>
						) : (
							<Text>"Sign up"</Text>
						)}
					</Button>
				</View>
			</View>
		</View>
	);
};

export default SignUp;
