import React, {useEffect} from 'react';
import PlayerHome from './src/screens/PlayerHome';
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
  return <PlayerHome />;
}
