import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {musiclibrary} from '../../data';
import LinearGradient from 'react-native-linear-gradient';
import PlayerModal from '../../components/PlayerModal';

export default function PlayerHome() {
  const [selectedMusic, setSelectedMusic] = useState(null);

  const PlaylistImageView = () => (
    <>
      <LinearGradient
        colors={['#0000ff', '#00005f', '#191414']}
        style={styles.linearGradient}>
        <Image
          style={{width: 200, height: 200}}
          source={{uri: 'https://www.bensound.com/bensound-img/punky.jpg'}}
        />
      </LinearGradient>
      <TouchableOpacity style={styles.shuffleButtonContainer}>
        <Text style={[styles.shuffleButton]}>SHUFFLE PLAY</Text>
      </TouchableOpacity>
    </>
  );

  const renderSingleMusic = ({item, index}) => {
    return (
      <>
        {index === 0 && <PlaylistImageView />}
        <Pressable onPress={() => setSelectedMusic(item)}>
          <View>
            <Text style={styles.musicTitle}>{item.title}</Text>
            <Text style={styles.artisteTitle}>{item.artist}</Text>
          </View>
        </Pressable>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <PlayerModal />
      <View style={[styles.widgetContainer, {justifyContent: 'center'}]}>
        <Text style={styles.musicTitle}>My music</Text>
      </View>
      <FlatList
        data={musiclibrary}
        keyExtractor={item => item.url}
        renderItem={renderSingleMusic}
      />
      {selectedMusic && (
        <View style={[styles.widgetContainer, {}]}>
          <View style={{flexDirection: 'row'}}>
            <Image
              resizeMode="cover"
              source={{uri: selectedMusic.artwork}}
              style={styles.widgetImageStyle}
            />
            <View>
              <Text style={styles.widgetMusicTitle}>{selectedMusic.title}</Text>
              <Text style={styles.widgetArtisteTitle}>
                {selectedMusic.artist}
              </Text>
            </View>
          </View>
          <Image
            source={require('../../assets/icons/play.png')}
            style={{height: 30, tintColor: '#fff', width: 30}}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
  },
  musicTitle: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '500',
    marginTop: 12,
    marginHorizontal: 20,
    marginBottom: 1,
  },
  artisteTitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
    marginHorizontal: 20,
    marginBottom: 12,
    marginTop: 1,
  },
  widgetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 0,
    height: 60,
    width: '100%',
    backgroundColor: '#5E5A5A',
  },
  widgetMusicTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    marginTop: 12,
    marginHorizontal: 10,
    marginBottom: 1,
  },
  widgetArtisteTitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
    marginHorizontal: 10,
    marginBottom: 12,
    marginTop: 1,
  },
  widgetImageStyle: {
    width: 55,
    height: 60,
    marginTop: 3,
  },
  linearGradient: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shuffleButton: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  shuffleButtonContainer: {
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 40,
    alignSelf: 'center',
    backgroundColor: '#1DB954',
  },
});
