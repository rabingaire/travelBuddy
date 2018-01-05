import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';

// import Logo from './../assets/logo.png';

const navigationOptions = {
  header: null,
};

export default class Home extends Component {
	static navigationOptions = navigationOptions;

  render() {
		const { 
			container, topContainer, bottomContainer, square,
			loginButton, signupButton
		} = styles;

		const { navigate } = this.props.navigation;

    return (
			<View style={ container }>
				<View style={ topContainer }>
					<View style={ square }>
						{/* <Image source={Logo} style={{width: 150, height: 150}}/> */}
					</View>
				</View>
				<View style={ bottomContainer }>
					<Button
						style={ loginButton }
						title='Start Travel'
						fontSize={20}
						backgroundColor='#FFFFFF'
						color='#f57c00'
						width={150}
						onPress={() => navigate('Start Travel')}
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
		backgroundColor: '#f57c00',
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
		height: 150,
		width: 150,
	},
	loginButton: {
		width: 150,
		borderWidth: 1,
		borderColor: '#f57c00',
	}
});