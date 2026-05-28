import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Category, CATEGORIES } from '../types/expense';
import { COLORS, SPACING, BORDER_RADIUS } from '../constants/theme';

interface CategoryFilterProps {
  selectedCategory: Category | 'All';
  onSelectCategory: (category: Category | 'All') => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity
          style={[
            styles.chip,
            selectedCategory === 'All' && styles.selectedChip,
            { backgroundColor: selectedCategory === 'All' ? COLORS.text.primary : '#F0F0F0' }
          ]}
          onPress={() => onSelectCategory('All')}
        >
          <Text style={[styles.chipText, selectedCategory === 'All' && styles.selectedChipText]}>ALL</Text>
        </TouchableOpacity>
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.chip,
              selectedCategory === cat && styles.selectedChip,
              { backgroundColor: selectedCategory === cat ? COLORS.categories[cat as keyof typeof COLORS.categories] : '#F0F0F0' }
            ]}
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
    paddingVertical: SPACING.md,
  },
  scrollContent: {
    paddingRight: SPACING.md,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: BORDER_RADIUS.xl,
    marginRight: 8,
  },
  selectedChip: {
    // Dynamic background set in inline style
  },
  chipText: {
    fontSize: 11,
    color: COLORS.text.secondary,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  selectedChipText: {
    color: COLORS.text.primary,
  },
});
