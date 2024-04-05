import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import cityData from "../../assets/cityData.json";

export default function TabOneScreen() {
  // Initial city, Boston
  const [latitude, setLatitude] = useState(42.361145);
  const [longitude, setLongitude] = useState(-71.057083);
  const [state, setState] = useState("Massachusetts");
  const [city, setCity] = useState("Boston");
  const [mapKey, setMapKey] = useState(0); // Key to force re-render of MapView

  const handleButtonPress = () => {

    // select a random city from the JSON file
    const randomCityIndex = Math.floor(Math.random() * cityData.length);
    const randomCity = cityData[randomCityIndex];


    // Generate random latitude and longitude values
    const newLatitude = randomCity.latitude; 
    const newLongitude = randomCity.longitude; 
    const newState = randomCity.state;
    const newCity = randomCity.city;

    // Update their state
    setLatitude(newLatitude);
    setLongitude(newLongitude);
    setCity(newCity);
    setState(newState);

    // Update map key to force re-render
    setMapKey(prevKey => prevKey + 1);
  };

  return (
    <View style={styles.container}>
      {/* Map View */}
      <View style={styles.mapContainer}>
        <MapView
          key={mapKey} // Key to force re-render
          style={styles.map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{ latitude: latitude, longitude: longitude }}
            title={city}
            description={state}
          />
        </MapView>
      </View>
      
      {/* Latitude and Longitude Display */}
      <View style={styles.infoContainer}>
        <Text style={styles.text}>State: <Text style={styles.textColor}>{state}</Text> </Text>
        <Text style={styles.text}>City: <Text style={styles.textColor}>{city}</Text> </Text>
        <Text style={styles.text}>Latitude: <Text style={styles.textColor}>{latitude}</Text> </Text>
        <Text style={styles.text}>Longitude: <Text style={styles.textColor}>{longitude}</Text> </Text>
        <Button title="Next City!" onPress={handleButtonPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  infoContainer: {
    padding: 10,
  },
  text: {
    marginBottom: 5,
  },
  textColor: {
    color:'blue',
  },
});
