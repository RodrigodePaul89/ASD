import React, { useState } from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';
import TapRush from './TapRush';
import { styles } from './styles';

const SAVED_IMAGE_URI = 'https://i.pinimg.com/originals/91/37/eb/9137eb1f228273e71927e78950ec631b.jpg';

export default function App() {
  const [inGame, setInGame] = useState(false);

  return !inGame ? (
    <ImageBackground source={{ uri: SAVED_IMAGE_URI }} style={styles.homeBackground} imageStyle={styles.homeImage}>
      <View style={styles.homeOverlay}>
        <Text style={styles.homeTitle}>Tap Rush</Text>

        <Pressable onPress={() => setInGame(true)} style={styles.homePlayButton}>
          <Text style={styles.homePlayIcon}>▶</Text>
        </Pressable>
      </View>
    </ImageBackground>
  ) : (
    <TapRush onExit={() => setInGame(false)} />
  );
}
