import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import CarouselItem from './CarouselItem';
import { useCallback } from 'react';

type ImageCarouselProps = {
  images: string[];
  productId: string;
};
const ImageCarousel = ({ images, productId }: ImageCarouselProps) => {
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
  });
  const renderItem = useCallback(
    ({ item, index }: { item: string; index: number }) => {
      return (
        <CarouselItem
          image={item}
          index={index}
          scrollX={scrollX}
          productId={productId}
        />
      );
    },
    [scrollX, productId],
  );
  return (
    <Animated.FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      pagingEnabled={true}
      data={images}
      renderItem={renderItem}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
    />
  );
};

export default ImageCarousel;
