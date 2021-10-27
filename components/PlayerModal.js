import React from 'react';
import {View, Text, Modal, Image, StyleSheet, Pressable} from 'react-native';
import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-linear-gradient';
import ShuffleIcon from '../assets/icons/shuffle.png';
import PrevIcon from '../assets/icons/prev.png';
import NextIcon from '../assets/icons/next.png';
import LoopIcon from '../assets/icons/loop.png';
import PlayIcon from '../assets/icons/play.png';
import PauseIcon from '../assets/icons/pause.png';
import MenuIcon from '../assets/icons/down.png';

export default function PlayerModal({isVisible, onCloseModal, selectedMusic}) {
  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      presentationStyle="fullScreen">
      <LinearGradient
        colors={['#0000ff', '#00005f', '#191414']}
        style={styles.container}>
        <Pressable
          onPress={onCloseModal}
          style={{
            position: 'absolute',
            top: 45,
            left: 30,
          }}>
          <Image
            source={MenuIcon}
            style={{
              width: 15,
              height: 15,
              tintColor: '#fff',
            }}
          />
        </Pressable>
        <Text style={styles.mainText}>Playing from My Playlist</Text>
        <Text style={[styles.mainText, {fontWeight: 'bold'}]}>
          {selectedMusic.album}
        </Text>
        <Image
          style={{width: 350, height: 350, marginVertical: 75}}
          source={{uri: selectedMusic.artwork}}
        />
        <View style={{justifyContent: 'space-between', width: '100%'}}>
          <View>
            <Text style={styles.boldMainText}>{selectedMusic.title}</Text>
            <Text style={styles.mainText}>{selectedMusic.artist}</Text>
          </View>
          <Text>Like</Text>
        </View>

        <Slider
          tapToSeek={true}
          minimumTrackTintColor="#fff"
          style={{width: '100%', paddingHorizontal: 10}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={styles.mainText}>12:11</Text>
          <Text style={styles.mainText}>12:12</Text>
        </View>
        <View style={styles.timeStampHolder}>
          <Image style={styles.iconWidth} source={ShuffleIcon} />
          <Image style={styles.iconWidth} source={PrevIcon} />
          <View style={styles.playButtonHolder}>
            <Image
              style={[styles.iconWidth, {tintColor: '#000'}]}
              source={PlayIcon}
            />
          </View>
          <Image style={styles.iconWidth} source={NextIcon} />
          <Image style={styles.iconWidth} source={LoopIcon} />
        </View>
      </LinearGradient>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 20,
  },
  boldMainText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '500',
    marginTop: 12,
    marginHorizontal: 20,
    marginBottom: 1,
  },
  mainText: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
    marginHorizontal: 20,
    // marginBottom: 12,
    // marginTop: 1,
  },
  linearGradient: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWidth: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  timeStampHolder: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  playButtonHolder: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
