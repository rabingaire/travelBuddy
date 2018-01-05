import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Modal from 'react-native-modalbox';
import { Button } from 'react-native-elements';

//import Location from './../assets/location.png';
//import Info from './../assets/info.png';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class NearMe extends Component {
	static navigationOptions = ({navigation}) => ({
		title: 'Near Me'
  });

	constructor() {
		super();
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    };
  }
  
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      },
    (error) => console.log(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

	render() {
		const {
			mapView, model, modelHeader, modelHeaderText, modelBody,
			modelBodyText, modelSucess, tickImage
		} = styles;

		const { navigate } = this.props.navigation;
		
		return(
			<View style={mapView}>
        <MapView
          provider={ PROVIDER_GOOGLE }
          style={mapView}
          showsUserLocation={ true }
          region={ this.state.region }
        />
				<Modal style={model} position={"bottom"} ref={"modal"}>
					<View style={modelHeader}>
          	<Text style={modelHeaderText}>Delivery Details</Text>
					</View>
					<View style={modelBody}>
						<Text style={modelBodyText}>Pickup Location: Gothem City</Text>
						<Text style={modelBodyText}>Item: Bat Cape</Text>
						<Text style={modelBodyText}>Weight: 2KG</Text>
					</View>
        </Modal>
			</View>
		)
	}
} 


const styles = StyleSheet.create({
	mapView: {
		flex: 1,
	},
	model: {
		height: 300,
	},
	modelHeader: {
		borderColor: '#d6d7da',
		borderBottomWidth: 1,
		padding: 20,
		alignItems: 'center'
	},
	modelHeaderText: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	modelBody: {
		padding: 20,
		height: 170,
		alignItems: 'center'
	},
	modelBodyText: {
		fontSize: 18,
		lineHeight: 35,
	}
});