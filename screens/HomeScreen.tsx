import React, { useState, useMemo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Category } from '../types/expense';
import { Header } from '../components/Header';
import { CategoryFilter } from '../components/CategoryFilter';
import { ExpenseForm } from '../components/ExpenseForm';
import { ExpenseList } from '../components/ExpenseList';
import { useExpenses } from '../context/ExpenseContext';

export default function HomeScreen() {
  const { expenses, addExpense, deleteExpense, initialBudget } = useExpenses();
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const filteredExpenses = useMemo(() => {
    if (selectedCategory === 'All') return expenses;
    return expenses.filter((e) => e.category === selectedCategory);
  }, [expenses, selectedCategory]);

  const totalSpentFiltered = useMemo(() => {
    return filteredExpenses.reduce((sum, e) => sum + e.amount, 0);
  }, [filteredExpenses]);

  const totalSpentOverall = useMemo(() => {
    return expenses.reduce((sum, e) => sum + e.amount, 0);
  }, [expenses]);

  const remainingBalance = initialBudget - totalSpentOverall;

  return (
    <View style={styles.container}>
      <Header totalSpent={totalSpentFiltered} />
      <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <ExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} />
      
      <View style={styles.footer}>
        <Text style={styles.footerLabel}>REMAINING MONEY</Text>
        <Text style={[styles.footerValue, remainingBalance < 0 && styles.negativeBalance]}>
          ${remainingBalance.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  footer: {
    paddingVertical: 20,
    borderTopWidth: 2,
    borderTopColor: '#212121',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  footerLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#212121',
    letterSpacing: 1,
  },
  footerValue: {
    fontSize: 20,
    fontWeight: '300',
    color: '#2e7d32',
  },
  negativeBalance: {
    color: '#d32f2f',
  },
});
