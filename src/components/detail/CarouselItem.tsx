import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { colors } from '../../utils/colors';

type CarouselItemProps = {
  image: string;
  index: number;
  scrollX: SharedValue<number>;
};
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const IMAGE_WIDTH = SCREEN_WIDTH;
const CarouselItem = ({ image, index, scrollX }: CarouselItemProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * IMAGE_WIDTH,
      index * IMAGE_WIDTH,
      (index + 1) * IMAGE_WIDTH,
    ];

    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.85, 1, 0.85],
      Extrapolation.CLAMP,
    );

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{ scale }],
      opacity,
    };
  });
  return (
    <View style={styles.imageWrapper}>
      <Animated.View style={[styles.imageInner, animatedStyle]}>
        <Image source={{ uri: image }} style={styles.image} />
      </Animated.View>
    </View>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({
  imageWrapper: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH * 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.card,
  },
  imageInner: { width: '100%', height: '100%' },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
