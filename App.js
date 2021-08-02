import React, {useEffect, useState} from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import users from './assets/data/users';
import CardComponent from './src/components/CardComponent';

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  animatedCard: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextUser: {
    ...StyleSheet.absoluteFill,
    zIndex: -5,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentUser = users[currentIndex];
  const nextUser = users[currentIndex + 1];
  const {width} = useWindowDimensions();
  const xValue = useSharedValue(0);
  const yValue = useSharedValue(0);
  const SWIPE_VELOCITY_THRESHOLD = 800;
  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: xValue.value,
      },
      {
        translateY: yValue.value,
      },
      {
        rotate: `${xValue.value / 10}deg`,
      },
    ],
  }));
  const nextUserStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withSpring(Math.min(Math.abs(xValue.value) / width, 1)),
      },
    ],
    opacity: Math.max(0.5, Math.min(Math.abs(xValue.value) / width, 1)),
  }));
  const gestureHandler = useAnimatedGestureHandler(
    {
      onStart: (_, context) => {
        context.startX = xValue.value;
        context.startY = yValue.value;
      },
      onActive: (e, context) => {
        xValue.value = e.translationX * 1.5 + context.startX;
        yValue.value = e.translationY + context.startY;
      },
      onEnd: e => {
        if (Math.abs(e.velocityX) > SWIPE_VELOCITY_THRESHOLD) {
          xValue.value = withSpring(
            2 * width * Math.sign(e.velocityX),
            {},
            () => {
              runOnJS(setCurrentIndex)(currentIndex + 1);
            },
          );
        } else {
          xValue.value = withSpring(0);
          yValue.value = withSpring(0);
        }
      },
    },
    [xValue],
  );

  useEffect(() => {
    xValue.value = 0;
    yValue.value = 0;
  }, [currentIndex]);

  return (
    <View style={styles.pageContainer}>
      <>
        {nextUser && (
          <Animated.View style={[styles.nextUser, nextUserStyle]}>
            <CardComponent {...users[currentIndex + 1]} />
          </Animated.View>
        )}

        {currentUser && (
          <PanGestureHandler
            style={{width: '100%'}}
            onGestureEvent={gestureHandler}>
            <Animated.View style={[styles.animatedCard, cardStyle]}>
              <CardComponent {...users[currentIndex]} />
            </Animated.View>
          </PanGestureHandler>
        )}
      </>
    </View>
  );
};

export default App;
