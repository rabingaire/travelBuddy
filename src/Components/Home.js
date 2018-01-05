import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';

import Logo from './../assets/logo.png';

const navigationOptions = {
  header: null,
};

export default class Home extends Component {
	static navigationOptions = navigationOptions;

  render() {
		const { 
			container, topContainer, bottomContainer, square,
			loginButton, signupButton, appName
		} = styles;

		const { navigate } = this.props.navigation;

    return (
			<View style={ container }>
				<View style={ topContainer }>
					<View style={ square }>
						<Image source={Logo} />
						<Text style={ appName }>TRAVELBUDDY</Text>
					</View>
				</View>
				<View style={ bottomContainer }>
					<Button
						style={ loginButton }
						title='Start Travel'
						fontSize={20}
						backgroundColor='#FFFFFF'
						color='#00796b'
						width={150}
						onPress={() => navigate('NearMe')}
					/>
				</View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	topContainer: {
		flex: 3,
		backgroundColor: '#00796b',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
	}, 
	bottomContainer: {
		flex: 1,
		maxHeight: 100,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	square: {
		alignItems: 'center'
	},
	appName: {
		fontSize: 24,
		fontWeight: '600',
		color: '#FFFFFF',
		padding: 10
	},
	loginButton: {
		width: 150,
		borderWidth: 1,
		borderColor: '#00796b',
	}
});