import React from 'react'
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
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

	const _handleLoginPress = async (event) => {
		event.preventDefault();
		setLocalState({
			...localState,
			isSubmitting: true,
			errorMessage: null
		});
		const credentials = Realm.Credentials.emailPassword(
			localState.email,
			localState.password
		);
		try {
			const user = await client.login(credentials);
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
		<View className="login-container">
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

					<Button 
						disabled={localState.isSubmitting}
						title="Login"
						onPress={_handleLoginPress}
					>
						{localState.isSubmitting ? (
							<Text>"Loading..."</Text>
						) : (
							<Text>"Login"</Text>
						)}
					</Button>
				</View>
			</View>
		</View>
	);
};

export default LogIn
