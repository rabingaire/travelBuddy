import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, Image } from 'react-native';
import MapView from 'react-native-maps';
import Modal from 'react-native-modalbox';
import { Button } from 'react-native-elements';

//import Tick from './../assets/tick.png';
//import Info from './../assets/info.png';

const window = Dimensions.get('window');

export default class NearMe extends Component {
	static navigationOptions = ({navigation}) => ({
		title: 'Near Me'
	});

	constructor(props) {
		super(props)
		this.state = {
			region: {
				latitude: 27.6151957,
				longitude: 85.5253509,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			}, 
			marker: {
				latlng: {
					latitude: 27.617268,
					longitude: 85.528886
				}
      },
      error: null
		}
  }
  
  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          marker: {
            latlng: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            }
          },
          error: null,
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
				    longitudeDelta: 0.0421,
          }
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
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
					style={mapView}
					region={this.state.region} 
				>
					<MapView.Marker
            coordinate={this.state.marker.latlng}
            pinColor='#00796b'
						onPress={() => this.refs.modal.open()}
					/>
				</MapView>
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