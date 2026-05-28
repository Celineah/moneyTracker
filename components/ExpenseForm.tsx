import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Category, CATEGORIES } from '../types/expense';

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
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          style={[styles.input, { flex: 2 }]}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.row}>
        <View style={styles.categoryContainer}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setCategory(cat)}
              style={[styles.categoryBtn, category === cat && styles.selectedCategoryBtn]}
            >
              <Text style={[styles.categoryBtnText, category === cat && styles.selectedCategoryBtnText]}>
                {cat[0]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.addBtn} onPress={handleSubmit}>
          <Text style={styles.addBtnText}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 8,
    fontSize: 14,
    backgroundColor: '#fff',
    marginRight: 4,
  },
  categoryContainer: {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
  },
  categoryBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  selectedCategoryBtn: {
    backgroundColor: '#212121',
    borderColor: '#212121',
  },
  categoryBtnText: {
    fontSize: 12,
    color: '#757575',
  },
  selectedCategoryBtnText: {
    color: '#fff',
  },
  addBtn: {
    backgroundColor: '#2e7d32',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  addBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
});
