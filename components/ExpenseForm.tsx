import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Category, CATEGORIES } from '../types/expense';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';
import { Card } from './Card';

interface ExpenseFormProps {
  onAdd: (expense: { description: string; amount: number; category: Category }) => void;
}

export const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAdd }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState<Category>(CATEGORIES[0]);

  const handleSubmit = () => {
    if (!description || !amount) return;
    onAdd({
      description,
      amount: parseFloat(amount),
      category,
    });
    setDescription('');
    setAmount('');
  };

  return (
    <Card style={styles.container}>
      <Text style={styles.formTitle}>Add New Expense</Text>
      <View style={styles.row}>
        <TextInput
          style={[styles.input, { flex: 2 }]}
          placeholder="What did you buy?"
          value={description}
          onChangeText={setDescription}
          placeholderTextColor={COLORS.text.muted}
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="$ 0.00"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          placeholderTextColor={COLORS.text.muted}
        />
      </View>
      <View style={styles.row}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryPicker}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setCategory(cat)}
              style={[
                styles.categoryBtn,
                category === cat && { backgroundColor: COLORS.categories[cat as keyof typeof COLORS.categories] }
              ]}
            >
              <Text style={[styles.categoryBtnText, category === cat && styles.selectedCategoryText]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.addBtn} onPress={handleSubmit}>
          <Text style={styles.addBtnText}>ADD</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.md,
    padding: SPACING.md,
  },
  formTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.text.secondary,
    letterSpacing: 1,
    marginBottom: SPACING.sm,
  },
  row: {
    flexDirection: 'row',
    marginBottom: SPACING.sm,
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#F9F9F9',
    borderRadius: BORDER_RADIUS.md,
    padding: 12,
    fontSize: 14,
    color: COLORS.text.primary,
    marginRight: SPACING.xs,
  },
  categoryPicker: {
    flex: 1,
    marginRight: SPACING.sm,
  },
  categoryBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: BORDER_RADIUS.sm,
    backgroundColor: '#F9F9F9',
    marginRight: 6,
  },
  categoryBtnText: {
    fontSize: 11,
    color: COLORS.text.secondary,
    fontWeight: '600',
  },
  selectedCategoryText: {
    color: COLORS.text.primary,
  },
  addBtn: {
    backgroundColor: COLORS.text.primary,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: 20,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 12,
  },
});

import { ScrollView } from 'react-native-gesture-handler'; // Fixed missing import in thought
import { ScrollView as RNScrollView } from 'react-native';
const ScrollView = RNScrollView;
