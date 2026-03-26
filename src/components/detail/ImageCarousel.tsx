import { Dimensions } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import CarouselItem from './CarouselItem';
import { useCallback } from 'react';

type ImageCarouselProps = {
  images: string[];
};
const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const scrollX = useSharedValue(0);
  const { width: SCREEN_WIDTH } = Dimensions.get('window');
  const IMAGE_WIDTH = SCREEN_WIDTH;
  const activeIndex = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
      activeIndex.value = Math.round(event.contentOffset.x / IMAGE_WIDTH);
    },
  });
  const renderItem = useCallback(
    ({ item, index }: { item: string; index: number }) => {
      return <CarouselItem image={item} index={index} scrollX={scrollX} />;
    },
    [scrollX],
  );
  return (
    <Animated.FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={images}
      renderItem={renderItem}
      onScroll={scrollHandler}
    />
  );
};

export default ImageCarousel;
