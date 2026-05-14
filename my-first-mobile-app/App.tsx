import React, { useState } from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';
import TapRush from './components/TapRush';
import MusicWidget from './components/MusicWidget';
import { appStyles } from './style/appStyles';

const SAVED_IMAGE_URI = 'https://i.pinimg.com/originals/91/37/eb/9137eb1f228273e71927e78950ec631b.jpg';

export default function App() {
  const [inGame, setInGame] = useState(false);

  return !inGame ? (
    <ImageBackground source={{ uri: SAVED_IMAGE_URI }} style={appStyles.homeBackground} imageStyle={appStyles.homeImage}>
      <View style={appStyles.homeOverlay}>
        <MusicWidget />
        <Text style={appStyles.homeTitle}>Tap Rush</Text>

        <Pressable onPress={() => setInGame(true)} style={appStyles.homePlayButton}>
          <Text style={appStyles.homePlayIcon}>▶</Text>
        </Pressable>
      </View>
    </ImageBackground>
  ) : (
    <TapRush onExit={() => setInGame(false)} />
  );
}
