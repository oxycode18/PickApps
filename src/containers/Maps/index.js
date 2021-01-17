import React, { Component } from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Permissions from "expo-permissions";

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class Maps extends Component {
  constructor(props) {
    super(props)

    this.state = {
      initialPosition: {
        latitude: -0.026330,
        longitude: 109.342506,
        latitudeDelta: 0.922,
        longitudeDelta: 0.0421,
      },
    }
  }

  async componentDidMount() {
    let {status} = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      navigator.geolocation.watchPosition((position) => {
        var lat = parseFloat(position.coords.latitude)
        var long = parseFloat(position.coords.longitude)
  
        var initialRegion = {
          latitude: -0.026330,
          longitude: 109.342506,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }
  
        this.setState({initialPosition: initialRegion})
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
    }
  }

  renderScreen = () => {
      return (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={this.state.initialPosition}
            showsUserLocation={true}
            showsCompass={true}
            rotateEnabled={false}
            style={{}}
          >
            <Marker
              coordinate={{
                latitude:this.state.initialPosition.latitude,
                longitude:this.state.initialPosition.longitude
              }}
              title={"Posisi"}
              description={"Lokasi Anda Sekarang"}
            />
          </MapView>
        </View>
      );
  }

  render() {
    return (
      this.renderScreen()
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    height : SCREEN_HEIGHT/2,
    width : SCREEN_WIDTH,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  map: {
    flex:1,
    height : SCREEN_HEIGHT/2,
    width : SCREEN_WIDTH,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Maps;