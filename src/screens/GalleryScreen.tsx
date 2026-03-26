import React, { useMemo, useState } from 'react';
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
  const filteredProducts = useMemo(() => {
    if (selectedCategory !== 'All') {
      return products.filter(p => p.category === selectedCategory);
    }
    if (searchQuery.trim() !== '') {
      return products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    return products;
  }, [searchQuery, selectedCategory]);
  return (
    <View style={styles.container}>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Products
        products={filteredProducts}
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
