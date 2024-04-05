import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native';

export default function TabOneScreen() {
  const [imageData, setImageData] = useState<any>(null); // Specify type as 'any'

  useEffect(() => {
    fetchNewImage();
  }, []);

  // Function to fetch a new random image
  const fetchNewImage = () => {
    const clientID = process.env.UNSPLASH_API;
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;
    
    fetch(endpoint)
      .then(response => response.json())
      .then(jsonData => {
        setImageData(jsonData);
      })
      .catch(error => {
        console.log("Error: " + error);
      });
  };

  return (
    <View style={styles.container}>
      {imageData && (
        <TouchableOpacity onPress={fetchNewImage}>
          <Image source={{ uri: imageData.urls.regular }} style={styles.unsplashImage} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>Random Unsplash Image</Text>
      {imageData && (
        <Text style={styles.imageDetails}>
          Photo by <Text style={styles.creator} onPress={() => Linking.openURL(imageData.user.portfolio_url)}>{imageData.user.name}</Text> on Unsplash!
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  unsplashImage: {
    width: 300,
    height: 300,
    borderWidth: 20,
    borderColor: 'black',
    transform: [{ rotate: '3deg' }],
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  imageDetails: {
    backgroundColor: 'black',
    marginTop: 20,
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  creator: {
    color: 'white',
    textDecorationLine: 'underline',
  },
});
