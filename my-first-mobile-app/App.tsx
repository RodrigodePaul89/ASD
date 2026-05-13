import React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';

const IMAGE_URI = 'https://i.pinimg.com/originals/91/37/eb/9137eb1f228273e71927e78950ec631b.jpg';

export default function App() {
  return (
    <ImageBackground source={{ uri: IMAGE_URI }} style={styles.background} imageStyle={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Text style={styles.text}></Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
});
