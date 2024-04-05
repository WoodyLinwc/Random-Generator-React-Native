import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, Linking } from 'react-native';

import { Text, View } from '@/components/Themed';


export default function ModalScreen() {


  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Thank you for using this APP</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}

      <View style={styles.center}>
        {/* Displaying the image in a circle */}
        <Text style={styles.title}>Thank you for using this APP</Text>
        <Image source={require('../assets/me.jpg')} style={styles.image} />
        <Text style={styles.body}>👨‍💻Hi, my name is Woody Lin.</Text>

        <Text style={styles.body}></Text>

        <Text style={styles.body}>If you like this project,</Text>
        <Text style={styles.body}>🌠feel free to star it,</Text>
        <Text style={styles.body}>fork it, and modify it!</Text>

        <Text style={styles.body}></Text>

        <Text style={styles.body}>
          Connect me on 
          <Text style={styles.link} onPress={() => Linking.openURL('https://www.linkedin.com/in/woody-lin-32ab48161/')}> LinkedIn</Text>
          .
        </Text>
        <Text style={styles.body}>
          Check out my 
          <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/WoodyLinwc')}> Github</Text>
          .
        </Text>

        
      </View>


      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  center: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50, 
    marginBottom: 20, 
    marginTop: 20,
  },
  link: {
    color: 'blue',
  },
});
