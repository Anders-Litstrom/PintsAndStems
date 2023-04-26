import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { Realm, useApp, useUser } from '@realm/react'
import {AuthContext} from '../../Shared/StateManagement'

export default Delete = () => {


	const [localState, setLocalState] = React.useState(initialState);
	
	
	const _handlePress = async (event) => {
		
		const client = useApp();
		const user = useUser();

		await app.deleteUser(user);
	}
	return (
		<View className="login-container" style={styles.background}>
			<View className="card">
				<View className="container">


					{localState.errorMessage && (
						<View className="form-error"><Text>{localState.errorMessage}</Text></View>
					)}

					<TouchableOpacity 
						style={styles.button}
						disabled={localState.isSubmitting}
						title="Delete"
						onPress={_handlePress}
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

