import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
import type {ProductDetailScreenProps} from '../types/navigation';

export default function ProductDetailScreen({
  route,
}: ProductDetailScreenProps) {
  const {product} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{product.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: colors.textPrimary,
  },
});
