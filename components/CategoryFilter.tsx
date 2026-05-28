import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Category, CATEGORIES } from '../types/expense';

interface CategoryFilterProps {
  selectedCategory: Category | 'All';
  onSelectCategory: (category: Category | 'All') => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={[styles.chip, selectedCategory === 'All' && styles.selectedChip]}
          onPress={() => onSelectCategory('All')}
        >
          <Text style={[styles.chipText, selectedCategory === 'All' && styles.selectedChipText]}>ALL</Text>
        </TouchableOpacity>
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.chip, selectedCategory === cat && styles.selectedChip]}
            onPress={() => onSelectCategory(cat)}
          >
            <Text style={[styles.chipText, selectedCategory === cat && styles.selectedChipText]}>
              {cat.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: '#eeeeee',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  selectedChip: {
    backgroundColor: '#212121',
    borderColor: '#212121',
  },
  chipText: {
    fontSize: 11,
    color: '#616161',
    fontWeight: '500',
  },
  selectedChipText: {
    color: '#ffffff',
  },
});
