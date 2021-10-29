import React, {useEffect} from 'react';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackPlayer from 'react-native-track-player';
import {musiclibrary} from './data';

export default function App() {
  const setup = async () => {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.add(musiclibrary);
  };

  useEffect(() => {
    setup();
  }, []);
  return <TrackListScreen />;
}
