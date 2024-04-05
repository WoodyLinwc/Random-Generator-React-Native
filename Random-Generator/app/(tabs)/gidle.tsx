import { StyleSheet, Button, Image } from 'react-native';
import React, { useState, useEffect } from 'react';

// import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {

  // State variable to hold image URL, if useState('') has a default image path, then no need to use useEffect
  const [imageUrl, setImageUrl] = useState('');
  const totalImages = 1400;

  // useEffect will generate a new image when first open the app
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * totalImages);

    const initialImageUrl = `https://woodylinwc.github.io/Image-Storage/GIDLE/image_${randomNumber}.JPG`;

    setImageUrl(initialImageUrl);
    // Empty dependency array ensures this effect runs only once, on component mount
  }, []);


  const handleButtonPress = () => {
    const randomNumber = Math.floor(Math.random() * totalImages);

    const initialImageUrl = `https://woodylinwc.github.io/Image-Storage/GIDLE/image_${randomNumber}.JPG`;

    setImageUrl(initialImageUrl);
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌸(G)I-DLE🌟Archive</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {imageUrl !== '' && <Image source={{ uri: imageUrl}} style={styles.image} />}
      <Button title="Click Me for More!" onPress={handleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    marginBottom: 20,
  }
});
