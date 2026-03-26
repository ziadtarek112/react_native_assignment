import React, { useState } from 'react';
import type { GalleryScreenProps } from '../types/navigation';
import { products } from '../data/Products';
import Header from '../components/gallery/Header';
import Products from '../components/gallery/Products';

const CATEGORIES = ['All', ...new Set(products.map(p => p.category))];
export default function GalleryScreen({}: GalleryScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Products
        products={products}
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </>
  );
}

// const styles = StyleSheet.create({});
