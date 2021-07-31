import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
// const vw = Dimensions.get('screen').width;
// const vh = Dimensions.get('screen').height;

const App = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.imageContainerClass}>
        <ImageBackground
          style={styles.imageClass}
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim1.JPG',
          }}>
          <View style={styles.textContainer}>
            <Text style={styles.name}>Some Name</Text>
            <Text style={styles.bio}>some Bio</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  textContainer: {
    padding: 10,
  },
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
  imageContainerClass: {
    width: '95%',
    height: '75%',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 2,
    shadowRadius: 6.65,

    elevation: 7,
  },
});
