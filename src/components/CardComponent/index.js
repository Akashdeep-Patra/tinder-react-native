import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
// const vw = Dimensions.get('screen').width;
// const vh = Dimensions.get('screen').height;

const CardComponent = ({name, image, bio}) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        style={styles.imageClass}
        source={{
          uri: image,
        }}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CardComponent;
const styles = StyleSheet.create({
  textContainer: {
    padding: 10,
  },
  name: {fontSize: 30, color: 'white', fontWeight: 'bold'},
  bio: {fontSize: 18, color: 'white', lineHeight: 25},
  imageClass: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  card: {
    backgroundColor: 'transparent',
    width: '95%',
    height: '75%',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 10,
    },
    shadowOpacity: 0.61,
    shadowRadius: 13.16,

    elevation: 15,
  },
});
