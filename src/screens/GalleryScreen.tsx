import React, { useState } from 'react';
import type { GalleryScreenProps } from '../types/navigation';
import { products } from '../data/Products';
import Header from '../components/gallery/Header';
import Products from '../components/gallery/Products';
import { StyleSheet, View } from 'react-native';
import { colors } from '../utils/colors';

const CATEGORIES = ['All', ...new Set(products.map(p => p.category))];
export default function GalleryScreen({}: GalleryScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <View style={styles.container}>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Products
        products={products}
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGrey,
  },
});
