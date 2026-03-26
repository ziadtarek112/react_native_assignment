import {Dimensions, Image, StyleSheet} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {forwardRef, useCallback, useImperativeHandle, useState} from 'react';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const START_X = SCREEN_WIDTH / 2 - 25;
const END_X = SCREEN_WIDTH - 50;

export type FlyingImageHandle = {
  fly: () => void;
};

type FlyingImageProps = {
  imageUri: string;
  startY: number;
  endY: number;
};

const FlyingImage = forwardRef<FlyingImageHandle, FlyingImageProps>(
  ({imageUri, startY, endY}, ref) => {
    const translateX = useSharedValue(START_X);
    const translateY = useSharedValue(startY);
    const scale = useSharedValue(0);
    const opacity = useSharedValue(0);
    const [visible, setVisible] = useState(false);

    const show = useCallback(() => setVisible(true), []);
    const hide = useCallback(() => setVisible(false), []);

    useImperativeHandle(ref, () => ({
      fly: () => {
        // Reset to start position
        translateX.value = START_X;
        translateY.value = startY;
        scale.value = 0;
        opacity.value = 0;

        runOnJS(show)();

        // Pop in
        scale.value = withSpring(1, {damping: 8, stiffness: 300});
        opacity.value = withTiming(1, {duration: 150});

        // Fly to cart (arc motion)
        translateX.value = withDelay(
          150,
          withTiming(END_X, {duration: 600}),
        );
        translateY.value = withDelay(
          150,
          withTiming(endY, {duration: 600}),
        );

        // Shrink as it arrives
        scale.value = withDelay(
          150,
          withSequence(
            withTiming(0.8, {duration: 300}),
            withTiming(0.3, {duration: 300}),
          ),
        );

        // Fade out at end
        opacity.value = withDelay(
          600,
          withTiming(0, {duration: 200}),
        );

        // Hide after animation completes
        setTimeout(() => {
          runOnJS(hide)();
        }, 850);
      },
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
        {scale: scale.value},
      ],
      opacity: opacity.value,
    }));

    if (!visible) {
      return null;
    }

    return (
      <Animated.View style={[styles.container, animatedStyle]}>
        <Image source={{uri: imageUri}} style={styles.image} />
      </Animated.View>
    );
  },
);

export default FlyingImage;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    zIndex: 999,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
